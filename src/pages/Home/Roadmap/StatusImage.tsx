import { useMemo } from "react";

export enum StatusEnum {
 Complete = "complete",
 InProcess = "process",
 Planning = "planning",
}
export function StatusImage(props: { status: StatusEnum; size?: "xl" }) {
 const { status, size } = props;
 const image = useMemo(() => {
  let _image = "";
  switch (status) {
   case StatusEnum.Complete:
    _image = "complete";
    break;
   case StatusEnum.Planning:
    _image = "planning";
    break;
   case StatusEnum.InProcess:
    _image = "process";
    break;
   default:
    break;
  }
  _image = `/assets/roadmap/${_image}${size === "xl" ? "-white" : ""}.png`;

  return _image;
 }, [status, size]);
 const className = useMemo(() => {
  let imgStyles = "";
  if (props.size === "xl") {
   imgStyles += "h-6 w-6";
  }
  return imgStyles;
 }, [props.size]);
 return <img src={image} alt="" />;
}
