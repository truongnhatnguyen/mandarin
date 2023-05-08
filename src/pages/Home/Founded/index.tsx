import { Button, ButtonColorEnum } from "../../../shared/components/Button";
import { Link } from "../../../shared/components/Link";

export function Founded() {
 return (
  <div
   id="team"
   style={{
    backgroundImage: "url('/assets/founded/bg.png')",
   }}
   className="bg-no-repeat pt-12 pb-24"
  >
   <div className="container-auto">
    <p className="text-3xl md:text-4xl xl:text-5xl text-white font-medium leading-tight">
     Founded by several builders with
     <br />
     a strong passion for the
     <br />
     blockchain industry
    </p>
    <Link to="https://docs.atus.network/atus-protocol/team">
     <Button
      className="mt-6 border-2 !px-8 "
      color={ButtonColorEnum.Transparent}
     >
      Learn More
     </Button>
    </Link>
   </div>
  </div>
 );
}
