import { useMemo } from "react";
import { ENV } from "../../environment";
import { Button } from "./Button";
import { Link } from "./Link";

export const ViewDocButton = (props: { link?: string }) => {
 const link = useMemo(() => {
  return props.link || ENV.whitepaperDoc;
 }, [props.link]);
 return (
  <Link to={link}>
   <Button>View Docs</Button>
  </Link>
 );
};
