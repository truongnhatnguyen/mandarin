import { useBuyPresale } from "../../../contexts/PresaleContext";
import { useMetaMask } from "../../../core/WalletProvider";
import { ConnectWalletButton } from "../../../shared/components/ConnectWalletButton";
import { AddTokenButton } from "../AddTokenButton";
import { Clock } from "../Clock";
import { InviteButton } from "../InviteButton";
import { FromToken } from "./FormItem/From";
import { ToToken } from "./FormItem/To";
import { ProgressTime } from "./ProgressTime";
import { SwapIcon } from "./SwapIcon";

export function Form() {
 const { connected } = useMetaMask();
 const { buy } = useBuyPresale();
 return (
  <div className=" flex flex-col space-y-3">
   <div className="text-center grid gap-4">
    <div>
     <Clock />
    </div>
    <ProgressTime />
    <div className="w-full">
     <img src="/assets/buypresale/header.png" alt="" className="w-full" />
    </div>
   </div>
   {!connected && (
    <div className="h-40 flex justify-center items-center">
     <ConnectWalletButton />
    </div>
   )}
   {connected && (
    <>
     <FromToken />
     <SwapIcon />
     <ToToken />
     <AddTokenButton />
     <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 py-5">
      <button onClick={buy} className="px-5 py-3 bg-blue-500 rounded-md">
       Buy presale
      </button>
      <InviteButton />
     </div>
    </>
   )}
  </div>
 );
}
