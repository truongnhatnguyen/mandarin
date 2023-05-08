export function Splitter(props: { className?: string }) {
 return (
  <div
   className={`absolute top-1/2 -translate-y-1/2 w-[1px] h-[calc(100%-1rem)] bg-[#abadae] ${
    props.className || ""
   }`}
  ></div>
 );
}
