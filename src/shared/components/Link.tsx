import { useLocation, useNavigate } from "react-router-dom";
import { useMainContext } from "../../contexts/MainContext";

export function Link(
 props: React.PropsWithChildren & { to: string; className?: string }
) {
 const { to } = props;
 const { search, pathname } = useLocation();
 const { goTo } = useMainContext();
 const navigate = useNavigate();
 const handleClick = () => {
  if (to) {
   if (to.includes("#")) {
    goTo(to.substring(to.indexOf("#") + 1));
   } else {
    if (props.to.includes("http")) {
     const a = document.createElement("a");
     a.href = to;
     a.target = "_blank";
     a.click();
    } else {
     navigate(props.to + `${search}`);
    }
   }
  }
 };
 return (
  <span
   className={`cursor-pointer hover:underline ${props.className || ""}`}
   onClick={handleClick}
  >
   {props.children}
  </span>
 );
}
