import { FromToken } from "./FormItem/From";
import { ToToken } from "./FormItem/To";
import { SwapIcon } from "./SwapIcon";

export function Form() {
  return (
    <div className=" flex flex-col space-y-3">
      <div className="text-center grid gap-4">
        <div className="bg-gray-400 rounded-full w-full h-5 relative">
          {" "}
          <div className="bg-gray-200 rounded-full w-36 h-5"></div>
          <div className="absolute top-0 right-36 text-sm ">
            1000 DRI = 1BNB
          </div>
        </div>
        <div>LISTING TIME: 20-7-2023</div>
        <div className="w-full">
          <img src="/assets/buypresale/header.png" alt="" className="w-full" />
        </div>
      </div>
      <FromToken />
      <SwapIcon />
      <ToToken />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 py-5">
        <button className="px-5 py-3 bg-blue-500 rounded-md">
          Buy presale
        </button>
        <button className=" px-5 py-3 bg-blue-300 rounded-md">
          Create Referal
        </button>
      </div>
    </div>
  );
}
