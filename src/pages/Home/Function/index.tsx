import { useEffect, useState } from "react";

interface IData {
 image: string;
 title: string;
 desc: string;
}
export function Function() {
 const [datas, setDatas] = useState<IData[]>([]);
 useEffect(() => {
  fetch("/assets/function/data.json")
   .then((t) => t.json())
   .then(setDatas);
 }, []);
 return (
  <div
   id="features"
   className="container-auto grid grid-cols-2 md:grid-cols-3 gap-8"
  >
   {datas.map((data) => (
    <FunctionItem key={data.title} {...data} />
   ))}
  </div>
 );
}

function FunctionItem(props: IData) {
 const { image, title, desc } = props;
 return (
  <div className="flex flex-col space-y-4 hover:-translate-y-4 duration-700">
   <div className="h-14 w-14 p-2 bg-[#e0e0e0] rounded-xl">
    <img className="mx-auto my-auto" src={image} alt="" />
   </div>
   <p className="text-xl font-bold">{title}</p>
   <p className="text-sm">{desc}</p>
  </div>
 );
}
