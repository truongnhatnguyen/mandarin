export function Dot(props: { className?: string }) {
 return (
  <div
   className={`absolute p-1 bg-white rounded-full ${props.className || ""}`}
  >
   <div className="w-2 h-2 rounded-full bg-white border-2 border-primary"></div>
  </div>
 );
}
