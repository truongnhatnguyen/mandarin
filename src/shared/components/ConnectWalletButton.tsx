import { useMemo, useState } from "react";
import metamaskicon from "../../assets/metamaskicon.png";
import trustwalleticon from "../../assets/trustwalleticon.png";
import wallet from "../../assets/wallet.png";
import { useMetaMask } from "../../core/WalletProvider";
import { WalletId } from "../../core/WalletProvider/wallet-interface";
import { Button, ButtonColorEnum } from "./Button";
import { Dialog } from "./Dialog";
import { YourWalletPopup } from "./Wallet/YourWalletPopup";
export const BaseConnectWalletButton = (
 props: {
  color?: ButtonColorEnum;
  className?: string;
  hiddenWhenConnected?: boolean;
 } & React.PropsWithChildren
) => {
 const { connect, connected } = useMetaMask();

 if (props.hiddenWhenConnected && connected) {
  return <></>;
 }

 const handleClick = async () => {
  try {
   await connect(WalletId.Metamask);
  } catch (error) {}
 };
 return (
  <>
   <Button
    onClick={() => handleClick()}
    color={props.color}
    className={"w-full " + (props.className || "")}
   >
    {props.children}
    Connect Wallet
   </Button>
  </>
 );
};
export const ConnectWalletButton = () => {
 const { status } = useMetaMask();

 if (status === "connected") return <ConnectedWalletButton />;

 return <BaseConnectWalletButton />;
};

export const ConnectedWalletButton = () => {
 const { account } = useMetaMask();
 const [isOpen, setIsOpen] = useState(false);
 const value = useMemo(() => {
  if (account) {
   return (
    account.substring(0, 4) +
    "..." +
    account.substring(account.length - 4, account.length)
   );
  }
  return "N/A";
 }, [account]);
 return (
  <>
   <Button color={ButtonColorEnum.Primary} onClick={() => setIsOpen(true)}>
    <img src={wallet} alt="Wallet" className="h-4 lg:h-6 " />
    <span title={account + ""}>{value}</span>
   </Button>
   {isOpen && <YourWalletPopup close={() => setIsOpen(false)} />}
  </>
 );
};

function PopupSelectWallet(props: {
 close: () => void;
 onClick: (e: { wallet: WalletId }) => void;
}) {
 return (
  <Dialog close={props.close} title="Connect to a wallet">
   <div className="grid grid-cols-2 gap-2 md:gap-8  pt-4 lg:pt-8">
    <button
     onClick={() => props.onClick({ wallet: WalletId.Metamask })}
     className="px-6 py-2 bg-slate-100 rounded-xl  hover:bg-slate-200"
    >
     <img className="" src={metamaskicon} alt="" />
    </button>
    <button
     onClick={() => props.onClick({ wallet: WalletId.TrustWallet })}
     className="px-6 py-2 bg-slate-100 rounded-xl  hover:bg-slate-200"
    >
     <img src={trustwalleticon} alt="" />
    </button>
   </div>
  </Dialog>
 );
}
