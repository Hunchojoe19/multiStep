import React, { useState } from "react";
import Stepper from "./../pages/Stepper";
import MainForm from "../pages/MainForm";
import PageOne from "./../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";
import Summary from "../pages/Summary";

const handleStep = (step) => {
  switch (step) {
    case 1:
      return <PageOne />;
    case 2:
      return <PageTwo />;
    case 3:
      return <PageThree />;
    case 4:
      return <PageFour />;
    case 5:
      return <Summary />;
    default:
      return <PageOne />;
  }
};
const number = [1, 2, 3, 4];
const Header = () => {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(number[0]);
  return (
    <div className="w-full h-full">
      <div
        className="relative w-full h-48 bg-opacity-50 md:hidden"
        id="bg-header"
      >
        <div className="w-56 absolute top-6 left-20">
          <Stepper
            active={active}
            setActive={setActive}
            step={step}
            setStep={setStep}
          />
        </div>
      </div>
      <div className="hidden md:flex relative w-full h-[550px] flex justify-center items-center bg-blue-100 md:h-[100vh]">
        <div className="hidden md:flex w-[700px] rounded-lg h-[600px] mx-auto bg-white shadow-300 flex-col items-start lg:w-[900px] lg:h-[600px]">
          <div className="flex p-4 gap-8 w-full">
            <div
              className="bg-blue-500 w-[200px] rounded-lg h-[570px] lg:w-[300px]"
              id="bg-desktop"
            >
              <Stepper
                step={step}
                setStep={setStep}
                setActive={setActive}
                active={active}
              />
            </div>
            <div className="hidden md:flex">{handleStep(step + 1)}</div>
          </div>
        </div>
      </div>

      <div className="md:hidden">{handleStep(step + 1)}</div>
      {/* <div className="hidden md:flex">{handleStep(step + 1)}</div> */}
    </div>
  );
};

export default Header;
