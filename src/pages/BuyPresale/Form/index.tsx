import { FromToken } from "./FormItem/From";
import { ToToken } from "./FormItem/To";
import { SwapIcon } from "./SwapIcon";

export function Form() {
 return (
  <div className=" flex flex-col space-y-1">
   <FromToken />
   <SwapIcon />
   <ToToken />
  </div>
 );
}
