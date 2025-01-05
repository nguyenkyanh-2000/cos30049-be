// GENERATED by @edgedb/generate v0.5.6

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export type $WalletType = {
  "EOA": $.$expr_Literal<$WalletType>;
  "Contract": $.$expr_Literal<$WalletType>;
} & $.EnumType<"default::WalletType", ["EOA", "Contract"]>;
const WalletType: $WalletType = $.makeType<$WalletType>(_.spec, "9cb4911e-c9f8-11ef-a64a-cd1b536c0308", _.syntax.literal);

export type $CurrencyλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "iconImg": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "symbol": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "exchangeRates": $.LinkDesc<$ExchangeRate, $.Cardinality.Many, {}, false, true,  false, false>;
  "<baseCurrency[is ExchangeRate]": $.LinkDesc<$ExchangeRate, $.Cardinality.Many, {}, false, false,  false, false>;
  "<destinationCurrency[is ExchangeRate]": $.LinkDesc<$ExchangeRate, $.Cardinality.Many, {}, false, false,  false, false>;
  "<currency[is Wallet]": $.LinkDesc<$Wallet, $.Cardinality.Many, {}, false, false,  false, false>;
  "<baseCurrency": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<currency": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<destinationCurrency": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Currency = $.ObjectType<"default::Currency", $CurrencyλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
  {symbol: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
  {name: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Currency = $.makeType<$Currency>(_.spec, "9cb0eed8-c9f8-11ef-8912-599a664486c8", _.syntax.literal);

const Currency: $.$expr_PathNode<$.TypeSet<$Currency, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Currency, $.Cardinality.Many), null);

export type $ExchangeRateλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "baseCurrency": $.LinkDesc<$Currency, $.Cardinality.One, {}, false, false,  false, false>;
  "destinationCurrency": $.LinkDesc<$Currency, $.Cardinality.One, {}, false, false,  false, false>;
  "ratio": $.PropertyDesc<_std.$float64, $.Cardinality.One, false, false, false, false>;
  "updatedAt": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, false>;
  "<exchangeRates[is Currency]": $.LinkDesc<$Currency, $.Cardinality.Many, {}, false, false,  false, false>;
  "<exchangeRates": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $ExchangeRate = $.ObjectType<"default::ExchangeRate", $ExchangeRateλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $ExchangeRate = $.makeType<$ExchangeRate>(_.spec, "9cb2965c-c9f8-11ef-baba-b5bc525e0134", _.syntax.literal);

const ExchangeRate: $.$expr_PathNode<$.TypeSet<$ExchangeRate, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($ExchangeRate, $.Cardinality.Many), null);

export type $TransactionλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "destinationWallet": $.LinkDesc<$Wallet, $.Cardinality.One, {}, false, false,  false, false>;
  "sourceWallet": $.LinkDesc<$Wallet, $.Cardinality.One, {}, false, false,  false, false>;
  "amount": $.PropertyDesc<_std.$float64, $.Cardinality.One, false, false, false, false>;
  "createdAt": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "hash": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
}>;
type $Transaction = $.ObjectType<"default::Transaction", $TransactionλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
  {hash: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Transaction = $.makeType<$Transaction>(_.spec, "9cb64e14-c9f8-11ef-95f7-f53c6a0b4aac", _.syntax.literal);

const Transaction: $.$expr_PathNode<$.TypeSet<$Transaction, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Transaction, $.Cardinality.Many), null);

export type $UserλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "address": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "firstName": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "lastName": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "fullName": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true, false, false>;
  "normalizedEmail": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, true, false, false, false>;
  "password": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "phone": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "profileImg": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "refreshToken": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
  {normalizedEmail: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
  {email: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $User = $.makeType<$User>(_.spec, "9cb81726-c9f8-11ef-8922-9393de5d6a42", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null);

export type $WalletλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "currency": $.LinkDesc<$Currency, $.Cardinality.One, {}, false, false,  false, false>;
  "address": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "balance": $.PropertyDesc<_std.$float64, $.Cardinality.One, false, false, false, true>;
  "type": $.PropertyDesc<$WalletType, $.Cardinality.One, false, false, false, false>;
  "<destinationWallet[is Transaction]": $.LinkDesc<$Transaction, $.Cardinality.Many, {}, false, false,  false, false>;
  "<sourceWallet[is Transaction]": $.LinkDesc<$Transaction, $.Cardinality.Many, {}, false, false,  false, false>;
  "<destinationWallet": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<sourceWallet": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Wallet = $.ObjectType<"default::Wallet", $WalletλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
  {address: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Wallet = $.makeType<$Wallet>(_.spec, "9cb49e0c-c9f8-11ef-9683-355b3cef84c7", _.syntax.literal);

const Wallet: $.$expr_PathNode<$.TypeSet<$Wallet, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Wallet, $.Cardinality.Many), null);



export { WalletType, $Currency, Currency, $ExchangeRate, ExchangeRate, $Transaction, Transaction, $User, User, $Wallet, Wallet };

type __defaultExports = {
  "WalletType": typeof WalletType;
  "Currency": typeof Currency;
  "ExchangeRate": typeof ExchangeRate;
  "Transaction": typeof Transaction;
  "User": typeof User;
  "Wallet": typeof Wallet
};
const __defaultExports: __defaultExports = {
  "WalletType": WalletType,
  "Currency": Currency,
  "ExchangeRate": ExchangeRate,
  "Transaction": Transaction,
  "User": User,
  "Wallet": Wallet
};
export default __defaultExports;
