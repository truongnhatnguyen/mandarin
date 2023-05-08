import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMetaMask } from "../../core/WalletProvider";

export function AddTokenButton() {
 const { addToken } = useMetaMask();
 return (
  <div
   className="flex space-x-1 items-center cursor-pointer group"
   onClick={addToken}
  >
   <div className="bg-[#dbdbdb] rounded-full w-5 h-5 flex justify-center items-center">
    <FontAwesomeIcon className="text-xs text-[#6a6a6a]" icon={faPlus} />
   </div>
   <span className="text-xs text-[#5f5f5f] group-hover:underline">Add ATU</span>
  </div>
 );
}
