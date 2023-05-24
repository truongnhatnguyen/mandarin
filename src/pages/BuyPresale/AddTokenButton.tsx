import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMetaMask } from "../../core/WalletProvider";
import { ENV } from "../../environment";

export function AddTokenButton() {
 const { addToken } = useMetaMask();
 return (
  <div
   className="flex space-x-2 items-center cursor-pointer group"
   onClick={addToken}
  >
   <div className="bg-[#dbdbdb] rounded-full w-5 h-5 flex justify-center items-center">
    <FontAwesomeIcon className="text-xs text-[#6a6a6a]" icon={faPlus} />
   </div>
   <span className="text-xs text-[#d6cfd7] group-hover:underline">
    Add {ENV.tokenSymbol}
   </span>
  </div>
 );
}
