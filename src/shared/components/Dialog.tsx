import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRef, MouseEventHandler, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
 close: () => void;
 title?: string;
 backdropClose?: boolean;
}
export const Dialog: React.FC<Props> = ({
 close,
 children,
 title,
 backdropClose,
}) => {
 const modalRef = createRef<HTMLDivElement>();
 const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
  if (backdropClose === undefined || backdropClose === true) {
   if (e.target === modalRef.current) {
    close();
   }
  }
 };
 return (
  <div
   ref={modalRef}
   className=" fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/75"
   onClick={handleClick}
  >
   <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 bg-contain  bg-no-repeat min-w-[350px]">
    <div className="w-full bg-white  rounded  px-6 py-3   ">
     <div className="relative">
      <button
       className="absolute  -right-2 top-1/2 -translate-y-1/2"
       title="Close"
       onClick={() => close()}
      >
       <FontAwesomeIcon className="text-black text-lg" icon={faXmark} />
      </button>
      {title && <p className="md:text-xl  font-bold pr-8 truncate">{title}</p>}
     </div>
     {children}
    </div>
   </div>
  </div>
 );
};
