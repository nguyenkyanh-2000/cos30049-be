import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import e, { EdgeDBService } from '../edgedb/edgedb.service';
import { CreateUserInput, UpdateUserInput, UserDto } from './user.dto';
import { normalizeEmail } from 'validator';
import { hash } from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from '../auth/auth.const';

@Injectable()
export class UserService {
  constructor(private readonly edgedb: EdgeDBService) {}

  async getUser<T extends boolean>({
    id,
    email,
    includeCredentials,
  }: {
    id?: string;
    email?: string;
    includeCredentials?: T;
  }): Promise<
    T extends true
      ? (UserDto & { password: string; refreshToken: string | null }) | null
      : UserDto | null
  > {
    const logger = new Logger(`${this.constructor.name}:${this.getUser.name}`);

    if (!id && !email) {
      logger.error('No id or email provided');
      throw new BadRequestException();
    }

    // Build the query
    const query = e.select(e.User, () => ({
      ...e.User['*'],
      ...(includeCredentials ? { password: true, refreshToken: true } : {}),
      filter_single: id ? { id } : { email: email! },
    }));

    const user = await this.edgedb.query(query);

    return user;
  }

  async createUser(input: CreateUserInput): Promise<UserDto> {
    const { email, password } = input;

    // Select all info from the newly inserted User
    const query = e.select(
      e
        .insert(e.User, {
          email,
          password: await hash(password, BCRYPT_SALT_ROUNDS),
          normalizedEmail: normalizeEmail(email) || email,
          // If another user with the same normalize email already exists, return null
        })
        .unlessConflict((user) => ({
          on: user.normalizedEmail,
        })),
      () => {
        return {
          ...e.User['*'],
          password: false,
        };
      },
    );

    const user = await this.edgedb.query(query);

    if (!user) {
      throw new BadRequestException('User could not be created');
    }

    return user;
  }

  async updateUser({
    id,
    updates,
  }: {
    id: string;
    updates: UpdateUserInput;
  }): Promise<UserDto | null> {
    const query = e.select(
      e.update(e.User, () => ({
        filter_single: { id },
        set: updates,
      })),
      () => {
        return {
          ...e.User['*'],
          password: false,
        };
      },
    );

    const user = await this.edgedb.query(query);

    return user;
  }
}