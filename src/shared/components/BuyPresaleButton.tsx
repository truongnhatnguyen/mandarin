import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonColorEnum } from "./Button";
import { Link } from "./Link";

export const BuyPresaleButton = (props: { color?: ButtonColorEnum }) => {
 return (
  <Link to="presale">
   <Button color={props.color} fullWidth>
    Buy Pre-sale
    <FontAwesomeIcon icon={faArrowRight} />
   </Button>
  </Link>
 );
};
