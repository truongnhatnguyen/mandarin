import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { ENV } from "../environment";
import { Button, ButtonColorEnum } from "../shared/components/Button";
import { Link } from "../shared/components/Link";
export const Footer = () => {
 return (
  <div className="bg-white py-4 container-auto ">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="flex space-x-12 text-sm">
     <ul>
      <li>
       <Link to={ENV.whitepaperDoc}>Whitepaper</Link>
      </li>
      <li>
       <Link to="https://docs.atus.network/atus-protocol/team">Team</Link>
      </li>
      <li>
       <Link to="/#features">Features</Link>
      </li>
      <li>
       <Link to="/#roadmap">Roadmap</Link>
      </li>
     </ul>
     <ul>
      <Link to="https://docs.atus.network/atus-protocol/atus-tokenomics">
       About ATU Token
      </Link>
      <li>
       <Link to={ENV.faqDoc}>FAQ</Link>
      </li>
      <Link to="https://docs.atus.network/staking">Staking</Link>
     </ul>
    </div>
    <div className="flex flex-col space-y-2">
     <p className="text-xs">
      Sign up for email updates to keep up to date with advancements on the Atus
     </p>
     <InputEmail />
    </div>
   </div>
   <div className="mt-8 flex justify-between">
    <div className="flex space-x-6">
     <span>©2023 Atus</span>
     <Link className="font-bold" to="/term">
      Term of Use
     </Link>
     <Link className="font-bold" to="/privacy">
      Privacy Policy
     </Link>
    </div>
    <div className="flex space-x-1">
     <Link to="https://twitter.com/Atus_Protocol">
      <img className="h-5 w-5" src="/assets/footer/twitter.png" alt="" />
     </Link>
     <Link to="https://t.me/Atus_Protocol">
      <img className="h-5 w-5" src="/assets/footer/telegram.png" alt="" />
     </Link>
    </div>
   </div>
  </div>
 );
};

function InputEmail() {
 const [email, setEmail] = useState<string>();

 const validateEmail = (email: string) => {
  return Boolean(
   email
    .toLowerCase()
    .match(
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );
 };
 const isValidEmail = useMemo(() => {
  if (!email) {
   return false;
  }
  return validateEmail(email);
 }, [email]);
 const handleClickSignUp = () => {
  if (isValidEmail) toast(ENV.getUpdateMessage);
 };
 return (
  <div className="mt-4 flex gap-2">
   <div className="max-w-[320px] flex-1 relative">
    <input
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="border border-zinc-400 w-full flex-1   py-3 px-2 pr-10 rounded text-xs 
  "
     name="email"
     placeholder="Email"
    />
    <div className="absolute top-1/2   right-3 -translate-y-1/2">
     {Boolean(email?.length) && !isValidEmail && (
      <FontAwesomeIcon
       className={`animate-pulse text-orange-600`}
       icon={faWarning}
      />
     )}
    </div>
   </div>
   <Button
    className="!rounded"
    color={ButtonColorEnum.Primary}
    onClick={handleClickSignUp}
    disabled={!isValidEmail}
   >
    Get Updates!
   </Button>
  </div>
 );
}
