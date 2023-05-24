import { useLocation, useNavigate } from "react-router-dom";
import { useMainContext } from "../../contexts/MainContext";

export function Link(
  props: React.PropsWithChildren & { to: string; className?: string }
) {
  const { to } = props;
  const { search } = useLocation();
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
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={`cursor-pointer hover:underline-none ${props.className || ""}`}
      onClick={handleClick}
      // eslint-disable-next-line no-script-url
      href="javascript:void(0)"
    >
      {props.children}
    </a>
  );
}
