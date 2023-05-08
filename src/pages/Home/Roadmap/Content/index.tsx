import { Splitter } from "../../../../shared/components/Spliiter";
import { Phases } from "./Phase/Phases";

export function RoadmapContent() {
 return (
  <div className="mt-12 relative">
   <Splitter className="left-0 md:left-1/2 md:-translate-x-1/2" />
   <Phases />
  </div>
 );
}
