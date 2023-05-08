import { ENV } from "../../../environment";
import { Button, ButtonColorEnum } from "../../../shared/components/Button";
import { BuyPresaleButton } from "../../../shared/components/BuyPresaleButton";
import { Link } from "../../../shared/components/Link";
import { Clock } from "../OClock";
import { Video } from "./Video";

export function Banner() {
 return (
  <div className="container-auto  px-8 relative z-10 pt-20">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="flex flex-col items-center gap-y-2">
     <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold  ">
      Connecting Blockchains, Empowering Possibilities
     </h1>
     <p className="text-sm font-light mt-2">
      Atus is a protocol that bridges the gap between isolated blockchain
      networks, allowing for seamless communication and collaboration between
      different ecosystems. The applications and services used at Ledger Forge
      eliminate the need for costly complex intermediaries, while ensuring
      security and transparency.
     </p>
     <div className="mt-2 ">
      <Clock />
     </div>
     <div className="mt-4 w-full justify-center flex flex-col sm:flex-row gap-4">
      <BuyPresaleButton color={ButtonColorEnum.Primary} />
      <Link to={ENV.whitepaperDoc}>
       <Button fullWidth>Whitepaper</Button>
      </Link>
     </div>
    </div>
    <div className="flex items-center">
     <Video />
    </div>
   </div>
  </div>
 );
}
