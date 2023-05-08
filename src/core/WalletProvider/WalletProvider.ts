import { isMobile } from "react-device-detect";
import { toast } from "react-toastify";
import { ENV } from "../../environment";
import { NumberFormater } from "../utils/formater/NumberFormater";
import { AddEthereumChainParameter } from "./metamask-context";
import { StatusEnum, WalletId } from "./wallet-interface";
const bnbChainId = "0x38";

export interface ISendParam {
 value?: number;
 refAddr?: string;
 account: string;
}

type ErrorWithCode = {
 code: number;
 [key: string]: any;
};
// MetaMask - RPC Error: Request of type 'wallet_requestPermissions' already pending for origin [origin]. Please wait.
const ERROR_CODE_REQUEST_PENDING = -32002;

interface IWalletProvider {
 request: (params: { method: string; params?: any }) => Promise<any>;
 providers: any[];
 isMetaMask: boolean;
 isTrustWallet: boolean;
}

interface IWalletProviderEvent {
 statusChanged: Array<(e: any) => void>;
}

type WindowInstanceWithEthereum = Window &
 typeof globalThis & { ethereum?: IWalletProvider };
type WindowInstanceWithTrustWallet = Window &
 typeof globalThis & { trustwallet?: IWalletProvider };
export class WalletProvider {
 private listeners: IWalletProviderEvent = { statusChanged: [] };
 private _provider: IWalletProvider | null =
  (window as WindowInstanceWithEthereum).ethereum ?? null;
 get provider() {
  if (!this._provider) {
   throw new Error();
  }
  return this._provider;
 }
 private _chainId?: string;
 get chainId() {
  return this._chainId;
 }
 private _account?: string;
 get account() {
  return this._account;
 }
 private _walletId?: WalletId;
 get walletId() {
  return this._walletId;
 }
 set walletId(walletId: WalletId | undefined) {
  this._walletId = walletId;
  if (walletId !== undefined) localStorage.setItem("walletId", walletId + "");
  else {
   localStorage.removeItem("walletId");
  }
 }
 private _status = StatusEnum.Unavailable;

 public set status(v: StatusEnum) {
  this._status = v;
  this.emitEvent("statusChanged", { status: v });
 }

 public get value(): string {
  return this._status;
 }

 constructor() {
  this.synchronize();
 }
 getMetaMaskProvider(): IWalletProvider | null {
  if (this.walletId === WalletId.Metamask) {
   const ethereum = (window as WindowInstanceWithEthereum).ethereum;
   if (!ethereum) return null;
   // The `providers` field is populated
   // - when CoinBase Wallet extension is also installed
   // - when user is on Brave and Brave Wallet is not deactivated
   // The expected object is an array of providers, the MetaMask provider is inside
   // See https://docs.cloud.coinbase.com/wallet-sdk/docs/injected-provider-guidance for more information
   // See also https://metamask.zendesk.com/hc/en-us/articles/360038596792-Using-Metamask-wallet-in-Brave-browser
   if (Array.isArray(ethereum.providers)) {
    //@ts-ignore
    const metaMaskProvider = ethereum.providers.find(
     (p: any) => p.isMetaMask && !p.isBraveWallet
    );
    if (metaMaskProvider) return metaMaskProvider;
    const braveWalletProvider = ethereum.providers.find(
     (p: any) => p.isMetaMask && p.isBraveWallet
    );
    if (!braveWalletProvider) return null;
    return braveWalletProvider;
   }
   if (!ethereum.isMetaMask) return null;
   return ethereum;
  } else if (this.walletId === WalletId.TrustWallet) {
   if (isMobile) {
    return (window as any).ethereum;
   }
   return (window as WindowInstanceWithTrustWallet).trustwallet ?? null;
  }
  return null;
 }

 private emitEvent(eventName: keyof IWalletProviderEvent, value: any) {
  this.listeners[eventName].forEach((func) => func(value));
 }
 public on(eventName: keyof IWalletProviderEvent, func: (e: any) => void) {
  this.listeners[eventName].push(func);
 }
 public off(eventName: keyof IWalletProviderEvent, func: (e: any) => void) {
  const idx = this.listeners[eventName].findIndex((f) => f === func);
  if (idx > -1) {
   this.listeners[eventName].splice(idx, 1);
  }
 }

 synchronize = async () => {
  {
   const walletId = localStorage.getItem("walletId") as unknown as WalletId;
   if (walletId) {
    this._walletId = walletId;
   }
  }
  const ethereum = this.getMetaMaskProvider();
  if (!ethereum) {
   this.status = StatusEnum.Unavailable;
   return;
  }
  this._provider = ethereum;

  const chainId: string = await ethereum.request({
   method: "eth_chainId",
  });
  this._chainId = chainId;
  const accessibleAccounts: string[] = await ethereum.request({
   method: "eth_accounts",
  });

  if (accessibleAccounts.length > 0) {
   this._account = accessibleAccounts[0];
   this.status = StatusEnum.Connected;
  } else {
   this.status = StatusEnum.NotConnected;
  }
 };

 //  subscribeToManualConnection() {
 //   const ethereum = getSafeMetaMaskProvider();
 //   const onAccountsChanged = async (accounts: string[]) => {
 //    if (accounts.length === 0) return;
 //    const chainId: string = await ethereum.request({
 //     method: "eth_chainId",
 //    });
 //    dispatch({
 //     type: "metaMaskConnected",
 //     payload: {
 //      accounts,
 //      chainId,
 //     },
 //    });
 //   };
 //   ethereum.on("accountsChanged", onAccountsChanged);
 //   return () => {
 //    ethereum.removeListener("accountsChanged", onAccountsChanged);
 //   };
 //  }

 //  subsribeToAccountsChanged() {
 //   const ethereum = getSafeMetaMaskProvider();
 //   const onAccountsChanged = (accounts: string[]) =>
 //    dispatch({ type: "metaMaskAccountsChanged", payload: accounts });
 //   ethereum.on("accountsChanged", onAccountsChanged);
 //   return () => {
 //    ethereum.removeListener("accountsChanged", onAccountsChanged);
 //   };
 //  }

 //  subscribeToChainChanged() {
 //   const ethereum = getSafeMetaMaskProvider();
 //   const onChainChanged = (chainId: string) =>
 //    dispatch({ type: "metaMaskChainChanged", payload: chainId });
 //   ethereum.on("chainChanged", onChainChanged);
 //   return () => {
 //    ethereum.removeListener("chainChanged", onChainChanged);
 //   };
 //  }

 requestAccounts = (): Promise<string[]> => {
  /**
   * Note about the pattern
   * Instead of only relying on the RPC Request response, the resolve of the promise may happen based from a polling
   * using the eth_accounts rpc endpoint.
   * The reason for this change is in order to handle pending connection request on MetaMask side.
   * See https://github.com/VGLoic/metamask-react/issues/13 for the full discussion.
   * Any improvements on MetaMask side on this behaviour that could allow to go back to the previous, simple and safer, pattern
   * should trigger the update of this code.
   */
  this.status = StatusEnum.Connecting;
  return new Promise((resolve, reject) => {
   const ethereum = this.provider;

   if (!ethereum) {
    return resolve([]);
   }
   const intervalId = setInterval(async () => {
    const accounts = await ethereum.request({
     method: "eth_accounts",
    });
    if (accounts.length === 0) return;
    clearInterval(intervalId);
    const chainId: string = await ethereum.request({
     method: "eth_chainId",
    });
    this._chainId = chainId;
    this._account = accounts[0];
    this.status = StatusEnum.Connected;
    resolve(accounts);
   }, 200);
   ethereum
    .request({
     method: "eth_requestAccounts",
    })
    .then(async (accounts: string[]) => {
     clearInterval(intervalId);
     const chainId: string = await ethereum.request({
      method: "eth_chainId",
     });
     this._chainId = chainId;
     this._account = accounts[0];
     this.status = StatusEnum.Connected;
     resolve(accounts);
    })
    .catch((err: unknown) => {
     if ("code" in (err as { [key: string]: any })) {
      if ((err as ErrorWithCode).code === ERROR_CODE_REQUEST_PENDING) return;
     }
     clearInterval(intervalId);
     reject(err);
    });
  });
 };

 addEthereumChain = async (parameters: AddEthereumChainParameter) => {
  try {
   await this.provider.request({
    method: "wallet_addEthereumChain",
    params: [parameters],
   });
  } catch (err: unknown) {
   if ("code" in (err as { [key: string]: any })) {
    if ((err as ErrorWithCode).code === ERROR_CODE_REQUEST_PENDING) return;
   }
   throw err;
  }
 };

 switchEthereumChain = async (chainId: string) => {
  const ethereum = this.provider;
  try {
   await ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId }],
   });
  } catch (err: unknown) {
   if ("code" in (err as { [key: string]: any })) {
    if ((err as ErrorWithCode).code === ERROR_CODE_REQUEST_PENDING) return;
   }
   throw err;
  }
 };

 send = (params: ISendParam) => {
  return new Promise((resolve, reject) => {
   const ethereum = this.provider;
   const { value, refAddr, account } = params;
   const web3 = new (window as any).Web3(ethereum);
   const contract = new web3.eth.Contract(ENV.abis, ENV.contractAddress);
   if (!value) {
    return;
   }
   if (value < ENV.minBNB) {
    toast.warn(`Buy as low as ${NumberFormater.format(ENV.minBNB)} BNB`, {
     hideProgressBar: true,
    });
    return;
   }
   if (value > ENV.maxBNB) {
    toast.warn(
     `The amount of BNB entered cannot be more than ${NumberFormater.format(
      ENV.maxBNB
     )}`,
     {
      hideProgressBar: true,
     }
    );
    return;
   }
   const ethVal = (value as any) * 1e18;
   const refAddress = refAddr || account;
   contract.methods[ENV.buyMethod](refAddress).send(
    {
     from: account,
     value: ethVal,
    },
    (err: any, res: string) => {
     if (err) {
      reject(err);
      return;
     }
     if (res) {
      resolve(res);
     }
    }
   );
  });
 };
 addToken = async () => {
  try {
   const ethereum = this.provider;
   const wasAdded = await ethereum.request({
    method: "wallet_watchAsset",
    params: {
     type: "ERC20",
     options: {
      address: ENV.contractAddress,
      symbol: ENV.tokenSymbol,
      decimals: ENV.contractDecimals,
      image: ENV.tokenLogo,
     },
    },
   });

   if (wasAdded) {
    toast.success("Thanks for your interest!");
   } else {
    toast.error(ENV.tokenSymbol + " Coin has not been added");
   }
  } catch (error) {
   console.error(error);
  }
 };
 switchWalletId = (val?: WalletId) => {
  this.walletId = val;
  this._provider = this.getMetaMaskProvider();
  if (!this._provider) {
   this.status = StatusEnum.Unavailable;
   return;
  }
  if (val) {
   this.status = StatusEnum.NotConnected;
  } else {
   this.status = StatusEnum.Unavailable;
  }
 };

 connect = async (walletId: WalletId) => {
  this.switchWalletId(walletId);
  const status = this._status;
  if (status === "unavailable") {
   if (isMobile) {
    const a = document.createElement("a");
    if (walletId === WalletId.Metamask) {
     // eslint-disable-next-line no-restricted-globals
     a.href = `http://metamask.app.link/dapp/${location.origin}`;
    } else if (walletId === WalletId.TrustWallet) {
     // eslint-disable-next-line no-restricted-globals
     a.href = `https://link.trustwallet.com/open_url?coin_id=4&url=${location.origin}`;
    }

    a.click();
    return null;
   }
   toast.warn(
    "Wallet provider not available, please install Metamask to connect!"
   );
   setTimeout(() => {
    const a = document.createElement("a");
    if (walletId === WalletId.Metamask) a.href = "https://metamask.io/";
    else if (walletId === WalletId.TrustWallet) {
     a.href = "https://trustwallet.com/deeplink/";
    }
    a.target = "_blank";
    a.click();
   }, 3000);
   return null;
  }
  try {
   const accounts = await this.requestAccounts();
   toast.success("Connect is succesfully");
   if (this.chainId === "0x1") {
    try {
     await this.switchEthereumChain(bnbChainId);
    } catch (error: any) {
     alert(JSON.stringify(error));
     if (error.code === 4902) {
      try {
       await this.addEthereumChain({
        chainName: "BNB Smart Chain",
        chainId: bnbChainId,
        nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
        rpcUrls: ["https://bsc-dataseed1.binance.org"],
       });
       await this.switchEthereumChain(bnbChainId);
      } catch (error) {
       toast.error("Cannot add BNB Smart Chain");
      }
     }
    }
   }
   return accounts;
  } catch (error) {
   toast.error("Connect is unsuccessfully");
  }
  return null;
 };
}
