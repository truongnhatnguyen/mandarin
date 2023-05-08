import Marquee from "react-fast-marquee";

export function TrustBy() {
 return (
  <div className="container-auto px-4 flex flex-col space-y-4">
   <span className="text-sm text-zinc-700">Trusted by</span>
   <Marquee pauseOnHover gradient={false}>
    {new Array(11).fill(0).map((_, idx2) => (
     <div key={`${idx2}`} className="px-2">
      <PartnerItem index={idx2 + 1} />
     </div>
    ))}
   </Marquee>
   <Marquee className="ml-4" pauseOnHover gradient={false}>
    {Array(11)
     .fill(0)
     .map((_, idx2) => (
      <div key={`${idx2}`} className="px-2">
       <PartnerItem index={idx2 + 8} />
      </div>
     ))}
   </Marquee>
  </div>
 );
}

export const PartnerItem: React.FC<{ index: number }> = ({ index }) => {
 return (
  <div className="p-[1px] rounded gradient bg-gradient-to-t">
   <div className="rounded bg-[#e3e3e3] flex justify-center py-2 px-12">
    <img src={`/assets/partners/${index}.png`} alt="" className="h-4 w-auto " />
   </div>
  </div>
 );
};
