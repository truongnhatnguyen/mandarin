import { ViewDocButton } from "../../../shared/components/ViewDocButton";

export function WhyHeader() {
 return (
  <>
   <p className="text-3xl text-center font-bold">
    Learn more about
    <br />
    Atus features
   </p>

   <div className="mt-4 flex justify-center">
    <ViewDocButton />
   </div>
  </>
 );
}
