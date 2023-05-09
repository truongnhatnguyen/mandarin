import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const StatusSuccessTransaction: React.FC<{
  close: () => void;
  address: string;
}> = ({ close, address }) => {
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/75">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-6 bg-contain  bg-no-repeat min-w-[350px]">
        <div className="w-full bg-white h-fit self-end  md:self-center rounded-3xl flex flex-col gap-2 md:gap-8 px-12 py-8  justify-self-center relative">
          <button
            className="absolute right-5 top-5"
            title="Close"
            onClick={() => close()}
          >
            <FontAwesomeIcon className="text-black text-lg" icon={faXmark} />
          </button>
          <p className="text-xl md:text-3xl font-bold text-center">
            Transaction Status
          </p>
          <p className="text-xs md:text-sm">
            Transaction is <span className="text-green-600">succesfully</span>
          </p>
          <a
            className="text-secondary-700 text-sm"
            //   href={`https://bscscan.com/tx/${address}`}
            target="_blank"
            rel="noreferrer"
          >
            Click here to see transaction detail
          </a>
        </div>
      </div>
    </div>
  );
};
