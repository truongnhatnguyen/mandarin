// import { NavLink } from "../../shared/components/NavLink";
import { useMetaMask } from "../../core/WalletProvider";
import { Link } from "../../shared/components/Link";
import { Menu } from "../Menu";
export const Header = () => {
 const { connected } = useMetaMask();
 return (
  <header className="cs-site_header cs-style1 cs-sticky-header cs-white_bg">
   <div className="cs-main_header">
    <div className="container-fluid">
     <div className="cs-main_header_in">
      <div className="cs-main_header_left">
       <Link className="cs-site_branding" to="/">
        <img src="/assets/home/logo.png" alt="Logo" />
       </Link>
      </div>
      <div className="cs-main_header_right">
       <Menu />
       {!connected && (
        <div className="cs-header_btns_wrap">
         <div className="cs-header_btns">
          <Link to="connect-wallet" className="cs-btn cs-style1">
           <span>Connect Wallet</span>
          </Link>
         </div>
        </div>
       )}
      </div>
     </div>
    </div>
   </div>
  </header>
 );
};
