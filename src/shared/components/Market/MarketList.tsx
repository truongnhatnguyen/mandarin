import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 forwardRef,
 useEffect,
 useImperativeHandle,
 useMemo,
 useState,
} from "react";
const formatter = new Intl.NumberFormat("en-US", {
 style: "currency",
 currency: "USD",
});

export interface IData {
 name: string;
 id: number;
 symbol: string;
 circulating_supply: number;
 quote: {
  USD: {
   price: number;
   percent_change_24h: number;
   market_cap: number;
   volume_24h: number;
  };
 };
}
interface IBinanceTicker24h {
 symbol: string;
 lastPrice: string;
 openPrice: string;
 priceChangePercent: number;
}
export enum MarketColumnEnum {
 "#",
 name,
 price,
 priceChange,
 marketCap,
 volumn24,
 suply,
}
interface ColumnSetting {
 name: MarketColumnEnum;
 title: string;
 getValue?: (item: IData) => string | number | React.ReactElement;
 width?: number;
 textAlign?: "center" | "right";
}
const COLUMNS_SETTING: ColumnSetting[] = [
 {
  name: MarketColumnEnum["#"],
  title: "",
  width: 12,
 },
 {
  name: MarketColumnEnum.name,
  title: "ASSET",
  getValue: (item: IData) => (
   <div className="flex gap-x-2 items-center">
    <img
     className="h-6"
     src={
      "https://s2.coinmarketcap.com/static/img/coins/64x64/" + item.id + ".png"
     }
     alt=""
    />
    {item.name}
   </div>
  ),
 },
 {
  name: MarketColumnEnum.price,
  title: "PRICE",
  getValue: (item: IData) => formatter.format(item.quote.USD.price),
  textAlign: "right",
 },
 {
  name: MarketColumnEnum.priceChange,
  title: "24H",
  getValue: (item: IData) => {
   const percent = Math.round(item.quote.USD.percent_change_24h * 100) / 100;
   return (
    <div
     className={
      (percent >= 0 ? "text-[#81ac5c]" : "text-[#cd7663]") +
      " text-center flex items-center gap-x-2 justify-end"
     }
    >
     <FontAwesomeIcon icon={percent >= 0 ? faArrowUp : faArrowDown} />
     {Math.abs(percent)}%
    </div>
   );
  },
  textAlign: "right",
 },
 {
  name: MarketColumnEnum.marketCap,
  title: "MARKET CAP",
  getValue: (item: IData) => formatter.format(item.quote.USD.market_cap),
  textAlign: "right",
 },
 {
  name: MarketColumnEnum.volumn24,
  title: "24H VOLUMN",
  getValue: (item: IData) => formatter.format(item.quote.USD.volume_24h),
  textAlign: "right",
 },
 {
  name: MarketColumnEnum.suply,
  title: "CIRCULATING SUPLY",
  getValue: (item: IData) => formatter.format(item.circulating_supply),
  textAlign: "right",
 },
];

interface Props {
 page: number;
 limit?: number;
 columns?: MarketColumnEnum[];
 className?: string;
}
export interface MarketListRef {
 reload: (props: { emptyArray?: boolean }) => void;
 sync: () => void;
}
export const MarketList = forwardRef<MarketListRef, Props>(function (
 props: Props,
 ref
) {
 const { page, limit: pLimit, columns: pColumns, className } = props;
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [datas, setDatas] = useState<IData[]>([]);
 const getList = async (params: { page: number; limit: number }) => {
  return fetch(
   // eslint-disable-next-line no-restricted-globals
   `${location.protocol}//${location.hostname}/list.php?page=${params.page}&limit=${limit}`
  )
   .then((t) => t.json())
   .then((res) => res.data || []);
 };
 const getTicker24h = async () => {
  const symbols: string[] = [];
  datas.forEach((data) => {
   if (data.symbol !== "USDT") {
    symbols.push(`${data.symbol}USDT`);
   }
  });
  const qSymbol = `[${symbols.map((symbol) => `"${symbol}"`)}]`;
  return fetch(`/binance.php?symbols=${qSymbol}`)
   .then((t) => t.json())
   .then((res: IBinanceTicker24h[]) => {
    const _datas = [...datas];
    _datas.forEach((data) => {
     const binanceData = res.find(
      (f) => f.symbol.replace("USDT", "") === data.symbol
     );
     if (binanceData) {
      data.quote.USD.price = +binanceData.lastPrice;
      data.quote.USD.percent_change_24h = +binanceData.priceChangePercent;
     }
     setDatas(_datas);
    });
   });
 };

 useImperativeHandle(ref, () => ({
  reload: (props: { emptyArray?: boolean }) => {
   return loadList({ emptyArray: props.emptyArray });
  },
  sync: () => {
   return sync();
  },
 }));

 useEffect(() => {
  loadList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [page, pLimit]);

 const limit = useMemo(() => {
  return pLimit || 10;
 }, [pLimit]);
 const columns: ColumnSetting[] = useMemo(() => {
  const _columns = pColumns
   ? pColumns.map(
      (name) => COLUMNS_SETTING.find((f) => f.name === name) as ColumnSetting
     )
   : COLUMNS_SETTING;
  return _columns;
 }, [pColumns]);

 function loadList(
  props: {
   emptyArray?: boolean;
  } = {}
 ) {
  let { emptyArray } = props;
  emptyArray = emptyArray ?? true;
  setIsLoading(true);
  if (emptyArray) setDatas([]);
  getList({ page, limit })
   .then((res) => {
    setDatas(res);
   })
   .finally(() => {
    setIsLoading(false);
   });
 }

 function sync() {
  getTicker24h().finally(() => {
   setIsLoading(false);
  });
 }

 return (
  <div className="overflow-x-auto">
   <table className={`text-primary w-full table-auto ${className || ""}`}>
    <thead>
     <tr>
      <th className="w-12"></th>
      {columns.map((column) => (
       <th
        key={column.name}
        className="p-4 text-xs w-20"
        style={{
         width: column.width,
         textAlign: column.textAlign,
        }}
       >
        {column.title}
       </th>
      ))}
     </tr>
    </thead>
    <tbody className="bg-white">
     {datas.length === 0 &&
      new Array(limit).fill(0).map((_, idx) => (
       <tr key={idx}>
        <td
         className={"h-[91px] w-full animate-pulse "}
         colSpan={columns.length + 1}
        ></td>
       </tr>
      ))}
     {datas.map((data, idx) => {
      const index = idx + 1 + page * 10;
      return (
       <tr key={data.id} className={" "}>
        <Cell>
         <img
          className="h-3 cursor-not-allowed"
          src="/assets/star.png"
          alt=""
         />
        </Cell>
        {columns.map((column) => (
         <Cell key={column.name} style={{ textAlign: column.textAlign }}>
          {column.getValue ? column.getValue(data) : index}
         </Cell>
        ))}
       </tr>
      );
     })}
    </tbody>
   </table>
  </div>
 );
});

export function Cell(
 props: React.PropsWithChildren & {
  className?: string;
  style?: React.CSSProperties;
 }
) {
 return (
  <td
   style={props.style}
   className={`font-semibold text-sm px-2 py-8 ${props.className || ""}`}
  >
   {props.children}
  </td>
 );
}
