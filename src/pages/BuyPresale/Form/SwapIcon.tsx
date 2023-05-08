import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SwapIcon() {
 return (
  <div className="mx-auto w-7 h-7 flex items-center justify-center bg-[#dbdbdb] rounded-full">
   <FontAwesomeIcon className="text-[#606060] text-sm" icon={faArrowDown} />
  </div>
 );
}
