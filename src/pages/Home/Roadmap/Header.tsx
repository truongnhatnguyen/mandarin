import { Status } from "./Status";
import { StatusEnum } from "./StatusImage";

export function RoadmapHeader() {
 return (
  <div>
   <p className="text-center text-3xl font-bold">Road Map</p>
   <div className="mt-2 flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
    <Status status={StatusEnum.Complete} title="Complete" />
    <span className="hidden sm:block">|</span>
    <Status status={StatusEnum.InProcess} title="In process" />
    <span className="hidden sm:block">|</span>
    <Status status={StatusEnum.Planning} title="Planning" />
   </div>
  </div>
 );
}
