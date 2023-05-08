import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useMetaMask } from "../core/WalletProvider";
import { NumberFormater } from "../core/utils/formater/NumberFormater";
import { ENV } from "../environment";

interface IContext {
 fromValue: number;
 toValue: number;
 setFromValue: (val: number) => void;
 setToValue: (val: number) => void;
 balance: number;
 balanceToken: number;
 buy: () => void;
 refAddr?: string;
}
const Context = createContext<IContext>({} as any);
export function BuyPresaleProvider(props: React.PropsWithChildren) {
 const [fromValue, _setFromValue] = useState(0);
 const [toValue, _setToValue] = useState(0);
 const { balance, balanceToken, connected, send, account, ethereum } =
  useMetaMask();
 const [refAddr, setRefAddr] = useState<string>();
 const { search } = useLocation();
 useEffect(() => {
  const url = new URLSearchParams(search);
  const refVal = url.get(ENV.referralPath);
  if (refVal) {
   const web3 = new (window as any).Web3(ethereum);
   if (web3.utils.toChecksumAddress(refVal)) {
   }
  }
  setRefAddr(refVal || undefined);
 }, [ethereum, search]);
 const setFromValue = (val: number) => {
  _setFromValue(val);
  const toVal = NumberFormater.roundUp(val * ENV.tokenExchange, 3);
  _setToValue(toVal);
 };
 const setToValue = (val: number) => {
  _setToValue(val);
  const fromVal = val / ENV.tokenExchange;
  setFromValue(fromVal);
 };
 const buy = async () => {
  if (ENV.allowBuy && !ENV.allowBuy.allow) {
   return toast.info(ENV.allowBuy.message);
  }
  if (connected && account) {
   try {
    await send({
     value: fromValue,
     account,
     refAddr,
    });
    toast.success("Transaction is succesfully");
   } catch (error) {
    toast.error("Transaction is unsuccessfully");
   }
  } else {
   toast.info("Connect Metamask please!");
  }
 };
 return (
  <Context.Provider
   value={{
    fromValue,
    setFromValue,
    toValue,
    setToValue,
    balance,
    balanceToken,
    buy,
   }}
  >
   {props.children}
  </Context.Provider>
 );
}

export function useBuyPresale() {
 return useContext(Context);
}
