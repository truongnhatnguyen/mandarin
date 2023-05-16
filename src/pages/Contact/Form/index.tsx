import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export function Form() {
 const [email, setEmail] = useState("");
 const [fullName, setFullName] = useState("");
 const [wrightSubject, setWrightSubject] = useState("");
 const [message, setMessage] = useState("");

 const [showFullNameError, setShowFullNameError] = useState(false);
 const [showEmailError, setShowEmailError] = useState(false);
 const [showWrightSubjectError, setShowWrightSubjectError] = useState(false);
 const [showMessageError, setShowMessageError] = useState(false);

 const validate = (email: string) => {
  return Boolean(
   email
    .toLowerCase()
    .match(
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );
 };

 const isValid = useMemo(() => {
  if (!email) {
   return false;
  }
  return validate(email);
 }, [email]);

 useEffect(() => {
  if (fullName.trim() !== "") {
   setShowFullNameError(false);
  }
  if (wrightSubject.trim() !== "") {
   setShowWrightSubjectError(false);
  }
  if (message.trim() !== "") {
   setShowMessageError(false);
  }
  if (email.trim() !== "") {
   setShowEmailError(false);
  }
 }, [email, fullName, message, wrightSubject]);

 function handleSendMessage(event: any) {
  event.preventDefault();

  if (fullName.trim() === "") {
   setShowFullNameError(true);
  }
  if (wrightSubject.trim() === "") {
   setShowWrightSubjectError(true);
  }
  if (message.trim() === "") {
   setShowMessageError(true);
  }
  if (email.trim() === "") {
   setShowEmailError(true);
  }
  if (fullName && wrightSubject && message && email && isValid) {
   toast.success(
    "Thank you for your feedback, we will have to respond as soon as possible",
    {
     position: "bottom-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "colored",
    }
   );
  }
  if (isValid) {
  } else {
   if (!Boolean(email.length)) {
    setShowEmailError(true);
   } else {
   }
  }
 }

 return (
  <form onSubmit={handleSendMessage} className="cs-contact_form">
   <div className="">
    <div className="flex flex-col relative">
     <div className="cs-form_field_wrap">
      <input
       type="text"
       className="cs-form_field"
       placeholder="Full Name"
       value={fullName}
       onChange={(e) => setFullName(e.target.value)}
      />
     </div>
     <div className="flex justify-end mt-1">
      {showFullNameError && (
       <span className="text-orange-600 font-mono text-xs mr-4">Required</span>
      )}
     </div>
     <div className="cs-height_20 cs-height_lg_20" />
    </div>
    <div className="flex flex-col relative">
     <div className="cs-form_field_wrap">
      <input
       type="text"
       className="cs-form_field"
       placeholder="Your Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
     </div>
     <div className="absolute top-3 right-5">
      {Boolean(email.length) && !isValid && (
       <FontAwesomeIcon
        className="animate-pulse text-orange-600 text-xl"
        icon={faWarning}
       />
      )}
     </div>
     <div className="flex justify-end mt-1">
      {showEmailError && (
       <span className="text-orange-600 font-mono text-xs mr-4">Required</span>
      )}
     </div>
     <div className="cs-height_20 cs-height_lg_20" />
    </div>
    <div className="flex flex-col relative">
     <div className="cs-form_field_wrap">
      <input
       type="text"
       className="cs-form_field"
       placeholder="Wright Subject"
       value={wrightSubject}
       onChange={(e) => setWrightSubject(e.target.value)}
      />
     </div>
     <div className="flex justify-end mt-1">
      {showWrightSubjectError && (
       <span className="text-orange-600 font-mono text-xs mr-4">Required</span>
      )}
     </div>
     <div className="cs-height_20 cs-height_lg_20" />
    </div>
    <div className="flex flex-col relative">
     <div className="cs-form_field_wrap">
      <textarea
       cols={30}
       rows={5}
       placeholder="Message..."
       className="cs-form_field"
       defaultValue={""}
       value={message}
       onChange={(e) => setMessage(e.target.value)}
      />
     </div>
     <div className="flex justify-end mt-1">
      {showMessageError && (
       <span className="text-orange-600 font-mono text-xs mr-4">Required</span>
      )}
     </div>
     <div className="cs-height_20 cs-height_lg_20" />
    </div>
    <div>
     <button type="submit" className="cs-btn cs-style1 cs-btn_lg">
      <span>Send Message</span>
     </button>
    </div>
   </div>
  </form>
 );
}
