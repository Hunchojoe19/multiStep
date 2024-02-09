import React, { useEffect, useState } from "react";

const number = [1, 2, 3, 4];

const Stepper = ({ active, setActive, step, setStep }) => {
  // const [active, setActive] = useState(false);
  // const [step, setStep] = useState(number[0]);
  console.log(step);
  const handleClick = (i) => {
    setStep(i);
    setActive(true);
  };

  useEffect(() => {
    setStep(0);
    setActive(true);
  }, []);

  return (
    <div className="w-full container h-12 mx-auto">
      <div className="flex items-center justify-start p-4 gap-5 h-full text-white font-bold">
        {number.map((item, index) => (
          <div
            key={index}
            className={`h-8 w-8 border rounded-full flex items-center justify-center ${
              step === index && active ? "bg-blue-200" : "bg-transparent"
            }`}
            onClick={() => handleClick(index)}
          >
            <h1
              className={`${
                step === index && active ? "text-black" : "text-white"
              } text-center font-bold`}
            >
              {item}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
