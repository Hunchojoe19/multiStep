import React from "react";
import thanks from "../assets/bg/icon-thank-you.svg";

const Summary = () => {
  return (
    <div>
      <div className="relative w-full h-[530px] flex justify-center items-center bg-blue-100 md:bg-white md:h-full">
        <div className="container mx-auto p-4 flex flex-col justify-center items-center md:hidden">
          <div className="absolute -top-20 bg-white w-[360px] h-[450px] border rounded-lg">
            <div className="flex flex-col items-start h-full p-8">
              <div className="mx-auto flex justify-center items-center mt-10">
                <img src={thanks} alt="thank you" className="h-16 mt-8" />
              </div>
              <p className="font-ubuntu mt-4 flex justify-center w-full text-center text-2xl text-blue-900 font-bold">
                Thank you!
              </p>
              <p className="font-ubuntu text-zinc-400 mt-2 text-center">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at hunchojoe@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-full h-full flex-col items-center">
          <div className="p-6 mt-8">
            <div className="mx-auto flex justify-center items-center mt-10">
              <img src={thanks} alt="thank you" className="h-24 mt-12" />
            </div>
            <p className="font-ubuntu mt-6 flex justify-center w-full text-center text-3xl text-blue-900 font-bold">
              Thank you!
            </p>
            <p className="font-ubuntu text-zinc-400 mt-2 text-center">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at hunchojoe@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
