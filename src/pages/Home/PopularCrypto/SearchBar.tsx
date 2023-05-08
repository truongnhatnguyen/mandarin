import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SearchBar() {
 return (
  <div className="bg-[#eeeeee] p-2 flex justify-between items-center rounded">
   <div className="flex space-x-2 items-center">
    <img className="h-3" src="/assets/star.png" alt="" />
    <div className="relative">
     <FontAwesomeIcon
      className="absolute top-2 left-1.5 text-xs text-[#595959]"
      icon={faSearch}
     />
     <input
      className="border-none rounded bg-white text-sm pl-6 text-2xs py-0.5"
      placeholder="Search"
     />
    </div>
   </div>
   <div
    className="hidden md:flex space-x-1 items-center justify-end
    "
   >
    <TextDesc text="Crypto" value="9,115" />
    <TextDesc text="Markets" value="639" />
    <TextDesc text="Market cap" value="$2,103,058,475,932.45" />
    <TextDesc text="24H Vol" value="$121,419,392,731.21" />
    <TextDesc text="BTC Dominance" value="9,115" />
    <TextDesc text="ETH Dominance" value="17,44%" />
   </div>
  </div>
 );
}

function TextDesc(props: { text: string; value: string }) {
 return (
  <div className="text-2xs">
   <span>{props.text}: </span>
   <span className="text-primary-400">{props.value}</span>
  </div>
 );
}
