import { toast } from "react-toastify";
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
      multi
      onChangeToken={(e) => {
        if (e !== "BNB") {
          toast("Only BNB is available", {
            type: "warning",
            hideProgressBar: true,
            autoClose: 3000,
          });
          return false;
        }
        return true;
      }}
      value={fromValue}
      onChange={setFromValue}
    />
  );
}
