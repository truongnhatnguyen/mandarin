import { useMemo } from "react";
import { NumericFormat } from "react-number-format";
import { NumberFormater } from "../../../../core/utils/formater/NumberFormater";
import { SelectTokens } from "./Select";

export function FormItem(props: {
 title: string;
 tokenName: string;
 token: string;
 balance: number;
 onChangeToken?: (val: string) => boolean | undefined;
 value: number;
 onChange: (val: number) => void;
 multi?: boolean;
}) {
 const balanceValue = useMemo(() => {
  return NumberFormater.format(props.balance);
 }, [props.balance]);
 return (
  <div className="flex space-x-4">
   <div className="flex-1 flex flex-col space-y-1">
    <span className="pl-4 text-3xs text-[#bdb3a0]">{props.title}</span>
    <NumericFormat
     className={
      "px-4 py-2 rounded-lg font-mono bg-[#dbdbdb] text-[#5f5f5f] placeholder:text-[#5f5f5f]"
     }
     thousandSeparator
     value={props.value}
     onValueChange={(values) => {
      const val = values.floatValue || 0;
      props.onChange(val);
     }}
    />
   </div>
   <div className="w-28 flex flex-col space-y-1">
    <span className="pl-2 text-2xs text-[#3f3f3f]">{props.tokenName}</span>
    <SelectTokens
     value={props.token}
     onChange={props.onChangeToken}
     multi={props.multi}
    />
    <div className="flex justify-between font-mono text-2xs text-[#787878]">
     <span>Balance:</span>
     <span>{balanceValue}</span>
    </div>
   </div>
  </div>
 );
}
