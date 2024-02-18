import { Checkbox, MenuItem } from "@mui/material";
import { checkboxClasses } from "@mui/material/Checkbox";
// import { withStyles } from "@mui-core/core/styles";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrent,
  setSelectedAddOns,
  setPrice,
  setHandleCheck,
} from "../redux/slices/inputSlice";

// const GreenCheckbox = withStyles({
// root: {
// color: "grey",
// "&$checked": {
// color: "blue",
// },
// },
// checked: {},
// })((props) => <Checkbox color="default" {...props} />);
const menuI = [
  {
    selected: false,
    label: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    selected: false,
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    selected: false,
    label: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];
const PageThree = () => {
  const { selectedTypes, menuItems } = useSelector((state) => state.input);
  const [isChecked, setIsChecked] = useState(menuItems.slice().fill(false));

  useEffect((e) => {
    handleChecked(e);
  }, []);
  const dispatch = useDispatch();

  const findTrue = () => {
    const trueValues = isChecked
      .map((v, i) => v && i)
      .filter((v) => v || v === 0)
      .map((i) => {
        return dispatch(setSelectedAddOns(menuItems[i]));
      });

    dispatch(setCurrent(3));
  };

  const handleChecked = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };

  const tots = menuItems.map((item) => {
    let price = 0;
    if (item.selected === true) {
      price += item.price;
    }
    return price;
  });

  const handleNewCheck = (e) => {
    dispatch(setHandleCheck(e));
  };

  const handleNext = () => {
    dispatch(setSelectedAddOns(menuItems));
    if (selectedTypes.switchState === false) {
      dispatch(setPrice(tots.reduce((a, b) => b + a)));
      dispatch(setCurrent(3));
    } else if (selectedTypes.switchState === true) {
      let totalValue = tots.reduce((a, b) => a + b);

      dispatch(setPrice(totalValue * 10));
      dispatch(setCurrent(3));
    }
  };

  const handleBack = () => {
    dispatch(setCurrent(1));
  };

  return (
    <div>
      <div>
        <div className="relative w-full h-[530px] flex justify-center items-center bg-blue-100 md:bg-white md:h-full">
          <div className="container mx-auto p-4 flex flex-col justify-center items-center md:hidden">
            <div className="absolute -top-20 bg-white shadow-lg w-[360px] h-[580px] border rounded-lg">
              <div className="flex flex-col items-start h-full p-8">
                <h2 className="text-2xl text-blue-900" id="info">
                  Pick add-ons
                </h2>
                <p className="font-ubuntu mt-2" id="text">
                  Add-ons help enhance your gaming experience.
                </p>
                <div className="flex flex-col item-start justify-center gap-4 mt-6">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className={`w-[300px] h-[70px] border rounded-lg flex justify-start items-center ${
                        item.selected
                          ? "bg-blue-50 border-purple-600"
                          : "bg-white"
                      }`}
                    >
                      <MenuItem
                        value={item.name}
                        // selected={item.price === value}
                      >
                        <Checkbox
                          sx={{
                            root: {
                              color: "grey",
                              [`&, &.${checkboxClasses.checked}`]: {
                                color: "blue",
                              },
                            },
                          }}
                          key={index}
                          checked={item.selected}
                          onClick={() => handleNewCheck(item)}
                        ></Checkbox>
                        <div className="w-[155px] flex flex-col justify-center items-start">
                          <p className="font-ubuntu text-blue-900 font-bold">
                            {item.label}
                          </p>
                          <p className="text-sm text-zinc-400" id="description">
                            {item.description}
                          </p>
                        </div>
                        <div className="ml-7 flex">
                          {selectedTypes.switchState === false ? (
                            <p className="text-sm text-blue-700" id="price">
                              +${item.price}/mo
                            </p>
                          ) : (
                            <p className="text-sm text-blue-700" id="price">
                              +${item.price * 10}/yr
                            </p>
                          )}
                        </div>
                      </MenuItem>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-full h-full flex-col items-center">
            <div className="p-6 mt-8">
              <h2 className="text-2xl text-blue-900" id="info">
                Pick add-ons
              </h2>
              <p className="font-ubuntu mt-2" id="text">
                Add-ons help enhance your gaming experience.
              </p>
              <div className="flex flex-col item-start justify-center gap-4 mt-6">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className={`w-[400px] h-[70px] border rounded-lg flex justify-start items-center ${
                      item.selected
                        ? "bg-blue-50 border-purple-600"
                        : "bg-white"
                    }`}
                  >
                    <MenuItem
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                      value={item.name}

                      // value={item.price}
                      // selected={item.price === value}
                    >
                      <Checkbox
                        sx={{
                          root: {
                            color: "grey",
                            [`&, &.${checkboxClasses.checked}`]: {
                              color: "blue",
                            },
                          },
                        }}
                        key={index}
                        checked={item.selected}
                        onClick={() => handleNewCheck(item)}
                      ></Checkbox>
                      <div className="w-[200px] ml-6 flex flex-col justify-center items-start">
                        <p className="font-ubuntu text-blue-900 font-bold">
                          {item.label}
                        </p>
                        <p className="text-sm text-zinc-400" id="description">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-12 flex justify-end items-center">
                        {selectedTypes.switchState === false ? (
                          <p className="text-sm text-blue-700" id="price">
                            +${item.price}/mo
                          </p>
                        ) : (
                          <p className="text-sm text-blue-700" id="price">
                            +${item.price}/yr
                          </p>
                        )}
                      </div>
                    </MenuItem>
                  </div>
                ))}
              </div>
              {/* <div className="mt-3 flex justify-start items-center gap-2 lg:gap-3"></div> */}

              <div className="hidden md:flex mt-6 justify-between items-center py-6">
                <button
                  className="text-zinc-400 font-ubuntu font-semibold cursor-pointer w-[120px] h-12 bg-zinc-50 rounded-lg"
                  onClick={handleBack}
                >
                  {" "}
                  Go Back
                </button>
                <button
                  className="bg-blue-900 text-white font-ubuntu w-[120px] h-12 flex justify-center items-center rounded-lg cursor-pointer"
                  onClick={handleNext}
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 md:hidden">
          <button
            className="text-zinc-400 font-ubuntu font-semibold cursor-pointer w-[120px] h-12 bg-zinc-50 rounded-lg"
            onClick={handleBack}
          >
            Go Back
          </button>
          <button
            className="bg-blue-900 text-white font-ubuntu w-[120px] h-12 flex justify-center items-center rounded-lg cursor-pointer"
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
