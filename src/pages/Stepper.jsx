import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../redux/slices/inputSlice";

const number = [1, 2, 3, 4];
const label = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

const Stepper = ({ active, setActive }) => {
  const { current } = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    dispatch(setCurrent(i));
    setActive(true);
  };

  useEffect(() => {
    dispatch(setCurrent(0));
    setActive(true);
  }, []);

  return (
    <div className="w-full container h-12 mx-auto">
      <div className="flex items-center justify-start p-4 gap-5 h-full text-white cursor-pointer font-bold md:hidden">
        {number.map((item, index) => (
          <div
            key={index}
            className={`h-8 w-8 border rounded-full flex items-center justify-center ${
              current === index && active ? "bg-blue-200" : "bg-transparent"
            }`}
            onClick={() => handleClick(index)}
          >
            <h1
              className={`${
                current === index && active ? "text-black" : "text-white"
              } text-center font-bold`}
            >
              {item}
            </h1>
          </div>
        ))}
      </div>
      <div className="hidden md:flex flex-col">
        <div className="flex flex-col items-start p-6 mt-6 justify-center gap-4 h-full text-white font-bold">
          {number.map((item, index) => (
            <div key={index} className="flex gap-5">
              <div
                className={`h-12 w-12 border rounded-full cursor-pointer flex items-center justify-center ${
                  current === index && active ? "bg-blue-200" : "bg-transparent"
                }`}
                onClick={() => handleClick(index)}
              >
                <h1
                  className={`${
                    current === index && active ? "text-black" : "text-white"
                  } text-center font-bold`}
                >
                  {item}
                </h1>
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-ubuntu text-neutral-400">
                  STEP {index + 1}
                </h1>
                <p>{label[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
