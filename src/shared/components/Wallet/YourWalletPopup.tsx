import {
 faAdd,
 faArrowUpRightDots,
 faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { useMetaMask } from "../../../core/WalletProvider";
import { ENV } from "../../../environment";
import { Button } from "../Button";
import { Dialog } from "../Dialog";

interface Props {
 close: () => void;
}
export const YourWalletPopup: React.FC<Props> = ({ close }) => {
 const { account, addToken, logout } = useMetaMask();
 const handleCopy = () => {
  navigator.clipboard.writeText(account + "");
  toast.success("Account address copied to clipboard", {
   hideProgressBar: true,
  });
 };

 const handleAddToMetamask = () => {
  addToken();
 };

 const handleLogout = () => {
  logout();
  close();
 };

 return (
  <Dialog close={close} title="Your Wallet">
   <div className="flex flex-col gap-y-3">
    <p className="text-sm font-semibold text-green-500">Connected</p>
    <p className="text-sm font-bold">{account}</p>
    <div className="flex gap-x-4">
     <button className="text-primary text-sm" onClick={handleCopy}>
      Copy Address <FontAwesomeIcon icon={faCopy} />
     </button>
     <a
      className="text-primary text-sm"
      target="_blank"
      rel="noreferrer"
      href={`https://bscscan.com/address/${account}`}
     >
      View on BSCScan <FontAwesomeIcon icon={faArrowUpRightDots} />
     </a>
     <button className="text-primary text-sm" onClick={handleAddToMetamask}>
      Add {ENV.tokenSymbol} to Wallet <FontAwesomeIcon icon={faAdd} />
     </button>
    </div>
    <p className="text-center font-bold mt-4 text-xl">History</p>
    <p className="text-slate-300 text-sm">No transaction</p>
    <Button
     className="border border-slate-300 hover:border-t-slate-400"
     onClick={handleLogout}
    >
     Logout
    </Button>
   </div>
  </Dialog>
 );
};
