import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import { useData } from "../../../../hooks/useData";
import { Dialog } from "../../../../shared/components/Dialog";

export function SelectTokens(props: {
 value: string;
 onChange?: (val: string) => boolean | undefined;
 multi?: boolean;
}) {
 const [isDlg, setIsDlg] = useState(false);
 const handleClick = () => {
  if (props.multi) {
   setIsDlg(true);
  }
 };
 const tokenImage = useMemo(() => {
  return `/assets/buypresale/tokens/${props.value}.png`;
 }, [props.value]);
 return (
  <>
   <div
    className={`py-1 flex items-center justify-center space-x-1 text-[#5f5f5f] bg-gradient-to-b from-[#f7f6f6] to-[#e2e2e2] rounded-lg border-[#c2c2c2] text-xs relative ${
     props.multi ? "cursor-pointer" : ""
    }`}
    onClick={handleClick}
   >
    <img className="h-4 w-4" src={tokenImage} alt="" />
    <span>{props.value}</span>
    {props.multi && (
     <FontAwesomeIcon
      className="absolute right-2 top-1/2 -translate-y-1/2"
      icon={faChevronDown}
     />
    )}
   </div>
   {isDlg && <DialogSelectToken close={() => setIsDlg(false)} />}
  </>
 );
}

interface IToken {
 name: string;
 desc: string;
}

function DialogSelectToken(props: { close: () => void }) {
 const { data } = useData<IToken[]>({
  path: "/assets/buypresale/data.json",
  defaultValue: [],
 });
 const [dataFilter, setDataFilter] = useState<IToken[]>([]);
 useEffect(() => {
  setDataFilter(data);
 }, [data]);
 const handleClick = () => {
  props.close();
 };
 const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
  const text = e.target.value.toUpperCase();
  if (text.length) {
   setDataFilter(data.filter((f) => f.name.toUpperCase().includes(text)));
  } else {
   setDataFilter(data);
  }
 };
 return (
  <Dialog title="Select Tokens" close={props.close}>
   <div className="max-h-[70vh] flex flex-col">
    <input
     type="text"
     className="mt-4 rounded border border-zinc-600 px-4 text-sm py-1 w-full"
     placeholder="Search Tokens"
     onChange={handleFilter}
    />
    <div className="mt-4 flex justify-between text-xs text-neutral-500">
     <span>TOKENS</span>
     <span>HOLDINGS</span>
    </div>
    <div className="mt-2 flex flex-col space-y-2 flex-1 h-full overflow-y-auto">
     {dataFilter.map((item) => {
      const imageSrc = `/assets/buypresale/tokens/${item.name}.png`;
      return (
       <button
        key={item.name}
        className="flex space-x-2 items-center cursor-pointer bg-zinc-50  hover:bg-zinc-300 py-1 px-2 rounded disabled:cursor-not-allowed disabled:opacity-50"
        disabled={item.name !== "BNB"}
        onClick={handleClick}
       >
        <div>
         <img className="h-6 w-6" src={imageSrc} alt="" />
        </div>
        <div className="flex flex-col items-start">
         <span className="font-bold text-sm">{item.name}</span>
         <p className="text-xs text-neutral-600">{item.desc}</p>
        </div>
       </button>
      );
     })}
    </div>
   </div>
  </Dialog>
 );
}
