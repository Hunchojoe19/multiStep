import React, { useState } from "react";
import Stepper from "./../pages/Stepper";
import MainForm from "../pages/MainForm";
import PageOne from "./../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";

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
        className="relative w-full h-48 bg-blue-500 bg-opacity-50 md:hidden"
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
      <div className="">{handleStep(step + 1)}</div>
    </div>
  );
};

export default Header;
