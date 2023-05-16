import { FormItem } from "..";
import { useBuyPresale } from "../../../../../contexts/PresaleContext";

export function FromToken() {
 const { fromValue, setFromValue, balance } = useBuyPresale();
 return (
  <FormItem
   title="Amount in BNB you pay"
   tokenName="BNB Token"
   balance={balance}
   token="BNB"
   value={fromValue}
   onChange={setFromValue}
  />
 );
}
