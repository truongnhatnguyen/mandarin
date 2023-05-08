export function SectionTitle(props: { title: string; desc?: string }) {
 return (
  <>
   <p className="text-2xl text-black font-semibold">{props.title}</p>
   {props.desc && (
    <span className="text-xs text-neutral-500">{props.desc}</span>
   )}
  </>
 );
}
