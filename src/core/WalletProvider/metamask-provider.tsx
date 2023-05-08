import { ethers } from "ethers";
import { useEffect, useMemo, useRef, useState } from "react";
import { ENV } from "../../environment";
import { NumberFormater } from "../utils/formater/NumberFormater";
import { WalletProvider } from "./WalletProvider";
import { IMetaMaskContext, MetamaskContext } from "./metamask-context";
import { IStatusChangedEvent, StatusEnum, WalletId } from "./wallet-interface";

export function MetaMaskProvider(props: React.PropsWithChildren) {
 const provider = useRef(new WalletProvider());
 const [status, setStatus] = useState<StatusEnum>();
 const [balance, setBalance] = useState(0);
 const [balanceToken, setBalanceToken] = useState(0);
 const [isLoadingGetBalance, setIsLoadingGetBalance] = useState<boolean>(true);
 const ethereum = useMemo(() => {
  if (status === StatusEnum.Connected) {
   return provider.current.provider;
  }
  return null;
 }, [status]);
 const web3Provider = useMemo(() => {
  if (ethereum) return new ethers.providers.Web3Provider(ethereum);
  return null;
 }, [ethereum]);
 const getBalance = () => {
  if (account && web3Provider) {
   web3Provider
    .getBalance(account)
    .then(ethers.utils.formatEther)
    .then((value) =>
     setBalance(NumberFormater.roundUp(value as unknown as number, 5))
    );
  }
 };
 const geteBalanceToken = () => {
  if (web3Provider) {
   const contractAbi = new ethers.utils.Interface(ENV.abis as any);
   const abiFormat = contractAbi.format(ethers.utils.FormatTypes.full);
   const contract = new ethers.Contract(
    ENV.contractAddress,
    abiFormat,
    web3Provider
   );

   contract
    .balanceOf(account)
    .then(ethers.utils.formatEther)
    .then((value: number) => setBalanceToken(value));
  }
 };
 useEffect(() => {
  function loadBalance() {
   if (status !== "connected") {
    setBalance(0);
    setBalanceToken(0);
   } else {
    getBalance();
    geteBalanceToken();
    setIsLoadingGetBalance(false);
   }
  }
  loadBalance();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [status]);
 useEffect(() => {
  function handleStatusChanged(e: IStatusChangedEvent) {
   setStatus(e.status);
  }
  provider.current.on("statusChanged", handleStatusChanged);
  return () => provider.current.off("statusChanged", handleStatusChanged);
 }, []);
 const account = useMemo(() => {
  if (status === StatusEnum.Connected) {
   return provider.current.account || null;
  }
  return null;
 }, [status]);
 const chainId = useMemo(() => {
  if (status === StatusEnum.Connected) {
   return provider.current.chainId || null;
  }
  return null;
 }, [status]);

 const switchWalletId = (val?: WalletId) => {
  provider.current.switchWalletId(val);
 };
 const logout = () => {
  provider.current.switchWalletId();
 };

 const connected = useMemo(() => {
  return status === StatusEnum.Connected;
 }, [status]);
 return (
  <MetamaskContext.Provider
   value={
    {
     account,
     addChain: provider.current.addEthereumChain,
     addToken: provider.current.addToken,
     chainId,
     connect: provider.current.connect,
     ethereum,
     send: provider.current.send,
     switchChain: provider.current.switchEthereumChain,
     switchWalletId,
     status: status as any,
     logout,
     balance,
     balanceToken,
     isLoadingGetBalance,
     connected,
    } as IMetaMaskContext
   }
  >
   {props.children}
  </MetamaskContext.Provider>
 );
}
