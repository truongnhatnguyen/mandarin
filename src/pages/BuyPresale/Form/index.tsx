import Clock from "src/pages/BuyPresale/Clock";
import { useBuyPresale } from "../../../contexts/PresaleContext";
import { useMetaMask } from "../../../core/WalletProvider";
import { ConnectWalletButton } from "../../../shared/components/ConnectWalletButton";
import { InviteButton } from "../InviteButton";
import { FromToken } from "./FormItem/From";
import { ToToken } from "./FormItem/To";
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
        <div className="bg-gray-400 rounded-full w-full h-5 relative">
          {" "}
          <div className="bg-gray-200 rounded-full w-48 h-5"></div>
          <div className="absolute top-0 right-[40%] text-sm font-extrabold text-transparent  bg-clip-text bg-gradient-to-r to-blue-600 from-pink-600">
            1000 DRI = 1BNB
          </div>
        </div>
        <div>LISTING TIME: 20-7-2023</div>
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
