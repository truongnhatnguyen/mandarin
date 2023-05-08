import { MainProvider } from "./contexts/MainContext";
import { BuyPresaleProvider } from "./contexts/PresaleContext";
import { MetaMaskProvider } from "./core/WalletProvider";

export function Providers(props: React.PropsWithChildren) {
 return (
  <MetaMaskProvider>
   <MainProvider>
    <BuyPresaleProvider>{props.children}</BuyPresaleProvider>
   </MainProvider>
  </MetaMaskProvider>
 );
}
