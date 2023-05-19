import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMetaMask } from "../../core/WalletProvider";
import { WalletId } from "../../core/WalletProvider/wallet-interface";

export function ConnectWallet() {
 const { connect: _connect } = useMetaMask();
 const navigate = useNavigate();
 const handleConnect = (walletId: WalletId) => {
  _connect(walletId).then(() => {
   navigate("/presale");
  });
 };
 return (
  <>
   <div className="pt-24">
    <div className="cs-height_100 cs-height_lg_70" />
    <div className="container-auto">
     <div className="cs-section_heading cs-style4">
      <h2 className="cs-section_title font-semibold">Connect Your Wallet</h2>
      <p className="cs-section_subtitle">
       Connect with us through existing Web3 bridges. Join the sale and access
       other great features at Mandarin with your wallet.
      </p>
     </div>
     <div className="cs-height_45 cs-height_lg_45" />
     <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-4">
      <ConnectWalletItem
       desc="Convenient interaction on web browser, it enables users to
          interact with Ethereum-based decentralized applications
          (dApps) directly from their browser."
       logo="./assets/img/general/iconbox_logo_1.svg"
       onClick={() => {
        handleConnect(WalletId.Metamask);
       }}
      />
      <ConnectWalletItem
       desc="Allowing users to securely store various cryptocurrencies,
Coinbase Wallet is designed with security in mind and includes
various features to protect users' funds and private keys."
       logo="./assets/img/general/iconbox_logo_2.svg"
       onClick={() => {
        toast.info("Coinbase Wallet Will Be Available Soon");
       }}
      />
      <ConnectWalletItem
       desc="Trust Wallet is a mobile cryptocurrency wallet that allows
          users to securely store, send and receive digital assets,
          easily interacting with various blockchain services."
       logo="./assets/img/general/iconbox_logo_3.svg"
       onClick={() => {
        handleConnect(WalletId.TrustWallet);
       }}
      />
     </div>
    </div>
    <div className="cs-height_70 cs-height_lg_40" />
   </div>
  </>
 );
}

export function ConnectWalletItem(props: {
 onClick: () => void;
 logo: string;
 desc: string;
}) {
 return (
  <div className="cs-iconbox cs-style3 cs-box_shadow cs-white_bg h-full flex flex-col justify-between">
   <div>
    <div className="cs-iconbox_img">
     <img src={props.logo} alt="Logo" />
    </div>
    <div className="cs-iconbox_text">{props.desc}</div>
   </div>
   <button className="cs-iconbox_btn cs-primary_font" onClick={props.onClick}>
    Connect Wallet
    <svg
     width={17}
     height={12}
     viewBox="0 0 17 12"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <path
      d="M16.5303 6.75396C16.8232 6.46107 16.8232 5.9862 16.5303 5.6933L11.7574 0.920332C11.4645 0.627439 10.9896 0.627439 10.6967 0.920332C10.4038 1.21323 10.4038 1.6881 10.6967 1.98099L14.9393 6.22363L10.6967 10.4663C10.4038 10.7592 10.4038 11.234 10.6967 11.5269C10.9896 11.8198 11.4645 11.8198 11.7574 11.5269L16.5303 6.75396ZM0 6.97363H16V5.47363H0V6.97363Z"
      fill="currentColor"
     />
    </svg>
   </button>
  </div>
 );
}
