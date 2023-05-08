import { FormItem } from "..";
import { useBuyPresale } from "../../../../../contexts/PresaleContext";

export function ToToken() {
 const { toValue, setToValue, balanceToken: balance } = useBuyPresale();
 return (
  <FormItem
   title="Into"
   tokenName="Atus"
   token="ATU"
   balance={balance}
   value={toValue}
   onChange={setToValue}
  />
 );
}
