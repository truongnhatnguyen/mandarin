import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useMetaMask } from "../../core/WalletProvider";
import { WalletId } from "../../core/WalletProvider/wallet-interface";
import { ENV } from "../../environment";
import { Dialog } from "../../shared/components/Dialog";

export function InviteButton() {
 const [isDialog, setIsDialog] = useState(false);
 const { connected, connect } = useMetaMask();
 const handleClick = () => {
  if (connected) setIsDialog(true);
  else {
   connect(WalletId.Metamask);
  }
 };
 return (
  <>
   <button className="px-5 py-3 bg-blue-300 rounded-md" onClick={handleClick}>
    Create Referal
   </button>
   {isDialog && <DialogInvite close={() => setIsDialog(false)} />}
  </>
 );
}

function DialogInvite(props: { close: () => void }) {
 const { account } = useMetaMask();
 const referral = useMemo(() => {
  // eslint-disable-next-line no-restricted-globals
  return `${location.origin}?${ENV.referralPath}=${account}`;
 }, [account]);
 const handleCopy = () => {
  navigator.clipboard.writeText(referral || "");
  toast.success("Copied to clipboard", {});
 };
 return (
  <Dialog title="My refferal link" close={props.close} backdropClose={false}>
   <div className="pt-6 max-w-96 w-full">
    {referral && (
     <div className="flex items-center w-full bg-secondary-300rounded-xl relative">
      <input
       className="px-4 py-2 rounded-lg pr-12 font-mono bg-[#dbdbdb] text-[#5f5f5f] placeholder:text-[#5f5f5f] w-full"
       value={referral}
      />
      <button
       className="absolute top-1/2 -translate-y-1/2 right-4"
       onClick={handleCopy}
      >
       <FontAwesomeIcon className="text-[#0e040e]" icon={faCopy} />
      </button>
     </div>
    )}
   </div>
  </Dialog>
 );
}
