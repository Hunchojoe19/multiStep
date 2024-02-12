import { Stack, Switch, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import image1 from "../assets/bg/icon-arcade.svg";
import image2 from "../assets/bg/icon-advanced.svg";
import image3 from "../assets/bg/icon-pro.svg";
import { styled } from "@mui/material/styles";
import {
  setCurrent,
  setFocusedIndex,
  setSelectedTypes,
  setSelectedPlan,
  setTotal,
} from "../redux/slices/inputSlice";
import { useDispatch, useSelector } from "react-redux";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

// const plans = [
// {
// monthly: [
// {
// id: 1,
// name: "Arcade",
// price: 9,
// image: `${image1}`,
// },
// {
// id: 2,
// name: "Advanced",
// price: 12,
// image: `${image2}`,
// },
// {
// id: 3,
// name: "Pro",
// price: 15,
// image: `${image3}`,
// },
// ],
// yearly: [
// {
// id: 1,
// name: "Arcade",
// price: 90,
// free: "2 months free",
// image: `${image1}`,
// },
// {
// id: 2,
// name: "Advanced",
// price: 120,
// free: "2 months free",
// image: `${image2}`,
// },
// {
// id: 3,
// name: "Pro",
// price: 150,
// free: "2 months free",
// image: `${image3}`,
// },
// ],
// },
// ];
const PageTwo = () => {
  const [isActive, setIsActive] = useState(false);
  const [plan, setPlan] = useState([]);
  // const [focusedIndex, setFocusedIndex] = useState(null);
  // const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const { focusedIndex, selectedPlan, selectedTypes, total } = useSelector(
    (state) => state.input
  );

  console.log("selected types ", selectedTypes.switchState);
  console.log("selected plan ", selectedPlan);
  console.log("total ", total);

  // useEffect(() => {
  // handleFocus(focusedIndex);
  // }, [focusedIndex]);

  const handleFocus = (i) => {
    dispatch(setFocusedIndex(i));
    dispatch(setTotal(selectedPlan[i - 1].price));
  };

  const handleSwitch = () => {
    dispatch(setSelectedTypes());
    dispatch(setFocusedIndex(1));
  };

  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <div className="relative w-full h-[530px] flex justify-center items-center bg-blue-100 md:bg-white md:h-full">
          <div className="container mx-auto p-4 flex flex-col justify-center items-center md:hidden">
            <div className="absolute -top-20 bg-white shadow-lg w-[360px] h-[580px] border rounded-lg">
              <div className="flex flex-col items-start h-full p-8">
                <h2 className="text-2xl text-blue-900" id="info">
                  Select your Plan
                </h2>
                <p className="font-ubuntu mt-2" id="text">
                  You have the option of monthly or yearly billing.
                </p>
                {selectedPlan?.map((item, i) => (
                  <div
                    key={item.id}
                    className={`mt-4 flex items-center justify-start p-4 rounded-lg w-[300px] h-[100px] gap-3 ${
                      focusedIndex === item.id
                        ? "border border-purple-600 bg-blue-50"
                        : "border border-zinc-300"
                    }`}
                    onClick={() => handleFocus(item.id)}
                  >
                    <div className="w-contain h-[40px] rounded-lg flex justify-start">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full flex justify-start"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-xl font-bold text-blue-900">
                        {item.name}
                      </h2>
                      <p className="font-ubuntu text-zinc-400">
                        ${item.price}
                        <span className="text-sm text-zinc-400">/</span>
                        <span className="text-sm text-zinc-400">month</span>
                      </p>
                      <p className="font-ubuntu text-blue-900 font-bold">
                        {item?.free}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center items-center mt-8 bg-blue-50 p-4 w-[300px] rounded-lg">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <p
                      className={`font-ubuntu font-bold ${
                        !selectedTypes.switchState
                          ? "text-blue-900"
                          : "text-zinc-300"
                      } `}
                    >
                      Monthly
                    </p>
                    <AntSwitch
                      onChange={handleSwitch}
                      disabled={focusedIndex === null}
                      checked={selectedTypes.switchState}
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    <p
                      className={`font-ubuntu font-bold ${
                        selectedTypes.switchState
                          ? "text-blue-900"
                          : "text-zinc-300"
                      } `}
                    >
                      Yearly
                    </p>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-full h-full flex-col items-center">
            <div className="p-6 mt-8">
              <h2 className="text-2xl text-blue-900" id="info">
                Select your Plan
              </h2>
              <p className="font-ubuntu mt-2" id="text">
                You have the option of monthly or yearly billing.
              </p>
              <div className="mt-3 flex justify-start items-center gap-2 lg:gap-3">
                {selectedPlan?.map((item) => (
                  <div
                    key={item.id}
                    className={`mt-4 flex flex-col cursor-pointer items-start gap-12 justify-start p-4 rounded-lg w-[130px] lg:w-[160px] h-[200px] ${
                      focusedIndex === item.id && isActive
                        ? "border border-purple-600 bg-blue-50"
                        : "border border-zinc-300"
                    }`}
                    onClick={() => handleFocus(item.id)}
                  >
                    <div className="mt-2 w-contain h-[40px] rounded-lg flex justify-start">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full flex justify-start"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-xl font-bold text-blue-900">
                        {item.name}
                      </h2>
                      <p className="font-ubuntu text-zinc-400">
                        ${item.price}
                        <span className="text-sm text-zinc-400">/</span>
                        <span className="text-sm text-zinc-400">month</span>
                      </p>
                      <p className="font-ubuntu text-blue-900 font-bold">
                        {item?.free}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center mt-8 bg-blue-50 p-4 w-[400px] rounded-lg lg:w-[504px]">
                <Stack direction="row" spacing={1} alignItems="center">
                  <p
                    className={`font-ubuntu font-bold ${
                      !selectedTypes && isActive
                        ? "text-blue-900"
                        : "text-zinc-300"
                    } `}
                  >
                    Monthly
                  </p>
                  <AntSwitch
                    onChange={handleSwitch}
                    disabled={focusedIndex === null}
                    checked={selectedTypes}
                    inputProps={{ "aria-label": "ant design" }}
                  />
                  <p
                    className={`font-ubuntu font-bold ${
                      selectedTypes && isActive
                        ? "text-blue-900"
                        : "text-zinc-300"
                    } `}
                  >
                    Yearly
                  </p>
                </Stack>
              </div>
              <div className="hidden md:flex mt-6 justify-between items-center py-6">
                <button
                  className="text-zinc-400 font-ubuntu font-semibold cursor-pointer w-[120px] h-12 bg-zinc-50 rounded-lg"
                  onClick={() => dispatch(setCurrent(0))}
                >
                  Go Back
                </button>
                <button className="bg-blue-900 text-white font-ubuntu w-[120px] h-12 flex justify-center items-center rounded-lg cursor-pointer">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 md:hidden">
          <button className="text-zinc-400 font-ubuntu font-semibold cursor-pointer w-[120px] h-12 bg-zinc-50 rounded-lg">
            Go Back
          </button>
          <button className="bg-blue-900 text-white font-ubuntu w-[120px] h-12 flex justify-center items-center rounded-lg cursor-pointer">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
