import { useMetaMask } from "../../core/WalletProvider";
import { AddTokenButton } from "./AddTokenButton";
import { BuyButton } from "./BuyButton";
import { Form } from "./Form";
import { InviteButton } from "./InviteButton";

export function BuyPresalePage() {
 const { connected } = useMetaMask();
 return (
  <div className="py-24 container-auto max-w-[540px] min-h-[calc(100vh-15rem)]">
   <div className="mx-auto">
    <p className="text-center text-xl font-semibold">Buy Pre-sale </p>
    <div className="mt-4 bg-[#f2f2f2] rounded-lg border border-[#d1d1d1] px-6 pt-6 pb-2 space-y-4">
     <Form />
     <div className="flex justify-between">
      <AddTokenButton />
      <InviteButton />
     </div>
    </div>
    {!connected && (
     <p className="mt-6 text-center">Connect your wallet to join Pre-sale</p>
    )}
    <BuyButton />
   </div>
  </div>
 );
}
