import { StatusEnum, StatusImage } from "./StatusImage";

export function Status(props: { status: StatusEnum; title: string }) {
 return (
  <div className="flex space-x-1">
   <StatusImage status={props.status} />
   <span>=</span>
   <span>{props.title}</span>
  </div>
 );
}
