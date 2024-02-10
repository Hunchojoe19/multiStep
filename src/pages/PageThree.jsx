import { Checkbox, MenuItem } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { useState } from "react";

const GreenCheckbox = withStyles({
  root: {
    color: "grey",
    "&$checked": {
      color: "blue",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const menuItems = [
  {
    label: "Online service",
    description: "Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    label: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+$2/mo",
  },
];
const PageThree = () => {
  const [isChecked, setIsChecked] = useState(menuItems.slice().fill(false));

  const [value, setValue] = useState();
  const handleChecked = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
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
                        isChecked[index]
                          ? "bg-blue-50 border-purple-600"
                          : "bg-white"
                      }`}
                    >
                      <MenuItem
                        value={item.price}
                        selected={item.price === value}
                      >
                        <GreenCheckbox
                          key={index}
                          checked={isChecked[index]}
                          onClick={() => handleChecked(index)}
                        ></GreenCheckbox>
                        <div className="w-[155px] flex flex-col justify-center items-start">
                          <p className="font-ubuntu text-blue-900 font-bold">
                            {item.label}
                          </p>
                          <p className="text-sm text-zinc-400" id="description">
                            {item.description}
                          </p>
                        </div>
                        <div className="ml-7 flex">
                          <p className="text-sm text-blue-700" id="price">
                            {item.price}
                          </p>
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
                      isChecked[index]
                        ? "bg-blue-50 border-purple-600"
                        : "bg-white"
                    }`}
                  >
                    <MenuItem
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                      value={item.price}
                      selected={item.price === value}
                    >
                      <Checkbox
                        key={index}
                        checked={isChecked[index]}
                        onClick={() => handleChecked(index)}
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
                        <p className="text-sm text-blue-700" id="price">
                          {item.price}
                        </p>
                      </div>
                    </MenuItem>
                  </div>
                ))}
              </div>
              {/* <div className="mt-3 flex justify-start items-center gap-2 lg:gap-3"></div> */}

              <div className="hidden md:flex mt-6 justify-between items-center py-6">
                <button className="text-zinc-400 font-ubuntu font-semibold cursor-pointer w-[120px] h-12 bg-zinc-50 rounded-lg">
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

export default PageThree;
