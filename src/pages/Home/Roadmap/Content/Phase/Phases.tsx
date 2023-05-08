import { Phase, PhaseEntity } from ".";
import { useData } from "../../../../../hooks/useData";

export function Phases() {
 const { data } = useData<PhaseEntity[]>({
  path: "/assets/roadmap/data.json",
  defaultValue: [],
 });
 return (
  <>
   {data.map((d) => (
    <Phase key={d.title} value={d} />
   ))}
  </>
 );
}
