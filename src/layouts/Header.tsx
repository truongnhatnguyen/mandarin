import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { ENV } from "../environment";
import { ButtonColorEnum } from "../shared/components/Button";
import { BuyPresaleButton } from "../shared/components/BuyPresaleButton";
import { BaseConnectWalletButton } from "../shared/components/ConnectWalletButton";
import { Link as LibLink } from "../shared/components/Link";
export const Header = () => {
 const { pathname } = useLocation();
 const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);
 const [sticky, setSticky] = useState(false);
 useEffect(() => {
  function onScroll() {
   if (window.scrollY > 50) {
    setSticky(true);
   } else {
    setSticky(false);
   }
  }
  document.addEventListener("scroll", onScroll);
  return () => document.removeEventListener("scroll", onScroll);
 }, []);
 const handleMenuMobileClick = () => {
  setIsOpenMobile(!isOpenMobile);
 };
 const isPresalePage = useMemo(() => {
  return pathname.includes("presale");
 }, [pathname]);
 return (
  <div
   className={`w-full px-12  py-3  bg-white sticky top-0 z-50 ${
    sticky ? "shadow-xl" : ""
   }`}
  >
   <div className="container-auto p-0 flex justify-between items-center relative">
    <div className="flex gap-x-12  w-full items-center">
     <div className="w-max">
      <Link to="/">
       <img
        src="/assets/logo.png"
        className="hidden md:block h-10 "
        alt="Logo"
       />
       <img src="/assets/logo-only.png" className="md:hidden h-6" alt="Logo" />
      </Link>
     </div>
     <button
      className="md:hidden flex gap-x-2 items-center "
      onClick={handleMenuMobileClick}
     >
      <FontAwesomeIcon icon={faList} />
      Menu
     </button>
     <div
      className=" hidden md:flex md:h-full gap-x-8 items-center flex-row flex-wrap text-sm 
     "
     >
      <Menu />
     </div>
    </div>
    <div className=" hidden 0.5sm:flex gap-x-2">
     {!isPresalePage && <BuyPresaleButton color={ButtonColorEnum.Gradient} />}
     {isPresalePage && (
      <BaseConnectWalletButton hiddenWhenConnected>
       <div className="rounded-full h-2 w-2 bg-red-400"></div>
      </BaseConnectWalletButton>
     )}
    </div>
    {isOpenMobile && (
     <div
      className="md:hidden gap-y-4 text-sm flex flex-col absolute  overflow-hidden top-12 left-0 right-0 p-4  bg-gradient-to-br from-secondary-900 to-secondary mx-4 -translate-y-2 rounded-lg z-30
     "
     >
      <Menu />
     </div>
    )}
   </div>
  </div>
 );
};

function Menu() {
 return (
  <>
   <Link to="#features">Features</Link>
   <Link to="#team">Team</Link>
   <Link to="#roadmap">Roadmap</Link>
   <Link to={ENV.whitepaperDoc}>Whitepaper</Link>
   <Link to={ENV.faqDoc}>FAQ</Link>
  </>
 );
}

function Link(props: React.PropsWithChildren & { to: string }) {
 return (
  <LibLink className="text-white md:text-inherit" to={props.to}>
   {props.children}
  </LibLink>
 );
}
