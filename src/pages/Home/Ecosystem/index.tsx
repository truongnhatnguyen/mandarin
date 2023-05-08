import { useMemo } from "react";
import { Button, ButtonColorEnum } from "../../../shared/components/Button";
import { Link } from "../../../shared/components/Link";

export function Ecosystem() {
 return (
  <div className="pt-14 pb-24 bg-gradient-to-br from-secondary via-primary to-secondary-900 text-white">
   <div className="container-auto">
    <p className="text-3xl md:text-4xl font-bold text-center">
     Powering the Atus Ecosystem
    </p>
    <p
     className="mt-4 text-center
      "
    >
     The ATU token serves three distinct purposes for the ecosystem: network
     governance, staking and connectivity.
    </p>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 xl:gap-20">
     <EcosystemItem
      image="/assets/ecosystem/govermance.png"
      title="Governance"
      desc="The ATU token plays an important role in the governance of the Atus ecosystem with its intended use to incentivize and reward users for their contributions and participation. ATU is also used to enable various features and services in the ecosystem, such as voting rights, access to certain products or services, and other benefits."
      imageStyles="h-40"
      imageEffectStyles="w-20"
     />
     <EcosystemItem
      image="/assets/ecosystem/stacking.png"
      title="Staking Mode"
      desc="Users staking their ATU tokens can earn rewards in the form of more ATU tokens or other incentives, such as discounted transaction fees or access to exclusive features. Staking rewards incentivize users to hold their tokens for a longer period of time, which can help promote network stability and security."
      imageStyles="h-40"
      imageEffectStyles="w-16"
     />
     <EcosystemItem
      image="/assets/ecosystem/connectivity.png"
      title="Connectivity"
      desc="The ATU token is used as a medium of exchange in the Atus ecosystem, allowing access to certain features and services of the ecosystem to create a sense of exclusivity for users. ATU is also used to incentivize users for their contributions to the ecosystem."
      imageStyles="h-20 -translate-x-4"
      imageEffectStyles="h-32 -translate-x-1/2 translate-y-2"
     />
    </div>
    <p className="mt-20 text-2xl md:text-3xl font-bold text-center">
     Learn more about <br />
     ATU and Staking Mode
    </p>
    <div className="mt-4 flex justify-center space-x-4">
     <Link to="https://docs.atus.network/atus-protocol/atus-tokenomics">
      <Button color={ButtonColorEnum.Transparent}>Discover ATU</Button>
     </Link>
     <Link to="https://docs.atus.network/staking">
      <Button color={ButtonColorEnum.Transparent}>Stacking Mode</Button>
     </Link>
    </div>
   </div>
  </div>
 );
}

function EcosystemItem(props: {
 image: string;
 title: string;
 desc: string;
 imageStyles: string;
 imageEffectStyles: string;
}) {
 const image1 = useMemo(() => {
  const dotIdx = props.image.lastIndexOf(".");
  return `${props.image.substring(0, dotIdx)}1.png`;
 }, [props.image]);
 return (
  <div className="flex flex-col ">
   <div className="relative h-40 flex items-center">
    <img className={`mx-auto ${props.imageStyles}`} src={props.image} alt="" />
    <div
     className={` absolute top-0 left-1/2 -translate-x-1/2 ${props.imageEffectStyles}`}
    >
     <img className="animate-transY" src={image1} alt="" />
    </div>
   </div>
   <p className="mt-2 text-center text font-bold">{props.title}</p>
   <p className="mt-4 text-center text-sm ">{props.desc}</p>
  </div>
 );
}
