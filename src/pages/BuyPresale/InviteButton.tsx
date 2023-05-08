import { faCopy, faPlus } from "@fortawesome/free-solid-svg-icons";
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
   <div
    className="flex space-x-1 items-center cursor-pointer group"
    onClick={handleClick}
   >
    <div className="bg-[#dbdbdb] rounded-full w-5 h-5 flex justify-center items-center">
     <FontAwesomeIcon className="text-xs text-[#6a6a6a]" icon={faPlus} />
    </div>
    <span className="text-xs text-[#5f5f5f] group-hover:underline">
     Invite your friends to join
    </span>
   </div>
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
       <FontAwesomeIcon className="" icon={faCopy} />
      </button>
     </div>
    )}
   </div>
  </Dialog>
 );
}
