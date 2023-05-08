import { useBuyPresale } from "../../contexts/PresaleContext";
import { useMetaMask } from "../../core/WalletProvider";
import { Button, ButtonColorEnum } from "../../shared/components/Button";
import { BaseConnectWalletButton } from "../../shared/components/ConnectWalletButton";

export function BuyButton() {
 const { connected, account } = useMetaMask();
 const { buy } = useBuyPresale();
 const handleBuy = () => {
  buy();
 };
 return (
  <div className="mt-4 flex flex-col gap-y-2">
   {!connected ? (
    <BaseConnectWalletButton className="!bg-[#f2f2f2]" />
   ) : (
    <Button className="overflow-x-hidden">
     Your wallet: <span className="truncate"> {account}</span>
    </Button>
   )}
   {connected && (
    <Button
     className="w-full"
     onClick={handleBuy}
     color={ButtonColorEnum.Primary}
    >
     Buy now
    </Button>
   )}
  </div>
 );
}
