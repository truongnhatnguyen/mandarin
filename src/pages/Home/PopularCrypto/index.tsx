import {
 faChevronLeft,
 faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRef, useState } from "react";
import { Button } from "../../../shared/components/Button";
import {
 MarketList,
 MarketListRef,
} from "../../../shared/components/Market/MarketList";
export function PopularCrypto() {
 const ref = createRef<MarketListRef>();
 const [page, setPage] = useState(0);

 const handlePreviousClick = () => {
  if (page > 0) {
   setPage(page - 1);
  }
 };
 const handleNextClick = () => {
  setPage(page + 1);
 };
 return (
  <div className="container-auto">
   <MarketList className="!text-zinc-900" ref={ref} page={page} />
   <div className="mt-4 flex justify-between">
    <MyButton onClick={handlePreviousClick} disable={page === 0}>
     <FontAwesomeIcon icon={faChevronLeft} />
     Previous
    </MyButton>
    <MyButton onClick={handleNextClick}>
     Next
     <FontAwesomeIcon icon={faChevronRight} />
    </MyButton>
   </div>
  </div>
 );
}

function MyButton(
 props: React.PropsWithChildren & { onClick: () => void; disable?: boolean }
) {
 return (
  <Button
   className="!rounded !bg-[#d6d6d6] border-none !font-normal hover:!bg-gray-600"
   onClick={props.onClick}
   disabled={props.disable}
  >
   {props.children}
  </Button>
 );
}
