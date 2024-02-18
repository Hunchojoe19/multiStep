import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setPrice } from "./../redux/slices/inputSlice";

const menuItems = [
  {
    label: "Online service",
    price: "+$1/mo",
  },
  {
    label: "Larger storage",
    price: "+$2/mo",
  },
  {
    label: "Customizable profile",
    price: "+$2/mo",
  },
];

const PageFour = () => {
  const { selectedAddOns, price, selectedTypes, selectedPlan, focusedIndex } =
    useSelector((state) => state.input);
  const dispatch = useDispatch();
  console.log("selectedAddOns", selectedAddOns[0]);
  console.log(
    "selectedPlans",

    selectedPlan.map((i, v) => {
      if (i.id === focusedIndex) {
        console.log(i);
      } else {
        return;
      }
    })
  );

  console.log("focused Index", focusedIndex);

  console.log("sector ", price);

  return (
    <div>
      <div className="relative w-full h-[530px] flex justify-center items-center bg-blue-100 md:bg-white md:h-full">
        <div className="container mx-auto p-4 flex flex-col justify-center items-center md:hidden">
          <div className="absolute -top-20 bg-white shadow-lg w-[360px] h-[450px] border rounded-lg">
            <div className="flex flex-col items-start h-full p-8">
              <h2 className="text-2xl text-blue-900" id="info">
                Finishing up
              </h2>
              <p className="font-ubuntu mt-2" id="text">
                Double-check everything looks OK before confirming.
              </p>

              <div className="mt-6 w-[300px] h-[200px] bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center border-b-[1px] border-zinc-300">
                  <div className="flex flex-col">
                    <h2 className="text-blue-900 font-ubuntu font-semibold">
                      {selectedPlan?.map((item) => {
                        if (item.id === focusedIndex) {
                          return item.name;
                        } else return;
                      })}
                      &nbsp;(Monthly)
                    </h2>
                    <p
                      className="text-zinc-400 underline font-ubuntu cursor-pointer mb-4"
                      onClick={() => dispatch(setCurrent(1))}
                    >
                      Change
                    </p>
                  </div>

                  {selectedPlan?.map((item) => {
                    if (
                      item.id === focusedIndex &&
                      selectedTypes.switchState === true
                    ) {
                      return (
                        <p className="text-blue-900 font-bold font-ubuntu">
                          ${item.price}/yr
                        </p>
                      );
                    } else if (
                      item.id === focusedIndex &&
                      selectedTypes.switchState === false
                    ) {
                      return (
                        <p className="text-blue-900 font-bold font-ubuntu">
                          ${item.price}/mo
                        </p>
                      );
                    }
                  })}
                </div>
                <div className="flex flex-col justify-start items-start mt-4 gap-2">
                  {selectedAddOns[0]?.map(
                    (item, i) =>
                      item.selected === true && (
                        <div
                          key={i}
                          className="flex justify-between items-center"
                        >
                          <p className="w-[210px] text-zinc-400 font-ubuntu">
                            {item.label}
                          </p>
                          {selectedTypes.switchState === true ? (
                            <p className="text-blue-900 font-bold font-ubuntu">
                              +${item.price * 10}/yr
                            </p>
                          ) : (
                            <p className="text-blue-900 font-bold font-ubuntu">
                              +${item.price}/mo
                            </p>
                          )}
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className="mt-4 w-[280px] flex justify-between items-center p-4">
                <p className="text-zinc-400 font-ubuntu">
                  Total{" "}
                  {selectedTypes.switchState === true
                    ? "(per year )"
                    : "(per month)"}
                </p>
                {selectedTypes.switchState === true ? (
                  <p className="text-textColor font-bold font-ubuntu text-lg">
                    ${price}/yr
                  </p>
                ) : (
                  <p className="text-textColor font-bold font-ubuntu text-lg">
                    ${price}/mo
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-full h-full flex-col items-center">
          <div className="p-6 mt-8">
            <h2 className="text-2xl text-blue-900" id="info">
              Finishing up
            </h2>
            <p className="font-ubuntu mt-2" id="text">
              Double-check everything looks OK before confirming.
            </p>
            <div className="mt-6 w-[400px] h-[200px] lg:w-[450px] bg-blue-50 rounded-lg p-4">
              <div className="flex justify-between items-center border-b-[1px] border-zinc-300">
                <div className="flex flex-col">
                  <h2 className="text-blue-900 font-ubuntu font-semibold">
                    {selectedPlan?.map((item) => {
                      if (item.id === focusedIndex) {
                        return item.name;
                      } else return;
                    })}
                    &nbsp;(Monthly)
                  </h2>
                  <p
                    className="text-zinc-400 underline font-ubuntu cursor-pointer mb-4"
                    onClick={() => dispatch(setCurrent(1))}
                  >
                    Change
                  </p>
                </div>
                {selectedPlan?.map((item) => {
                  if (
                    item.id === focusedIndex &&
                    selectedTypes.switchState === true
                  ) {
                    return (
                      <p className="text-blue-900 font-bold font-ubuntu">
                        ${item.price}/yr
                      </p>
                    );
                  } else if (
                    item.id === focusedIndex &&
                    selectedTypes.switchState === false
                  ) {
                    return (
                      <p className="text-blue-900 font-bold font-ubuntu">
                        ${item.price}/mo
                      </p>
                    );
                  }
                })}
              </div>
              <div className="flex flex-col justify-start items-start mt-4 gap-2">
                {selectedAddOns[0]?.map(
                  (item, i) =>
                    item.selected === true && (
                      <div
                        key={i}
                        className="flex justify-between items-center"
                      >
                        <p className="w-[310px] lg:w-[360px] text-zinc-400 font-ubuntu">
                          {item.label}
                        </p>
                        {selectedTypes.switchState === true ? (
                          <p className="text-blue-900 font-bold font-ubuntu">
                            +${item.price * 10}/yr
                          </p>
                        ) : (
                          <p className="text-blue-900 font-bold font-ubuntu">
                            +${item.price}/mo
                          </p>
                        )}
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="mt-4 w-[380px] lg:w-[450px] flex justify-between items-center p-4">
              <p className="text-zinc-400 font-ubuntu">
                Total{" "}
                {selectedTypes.switchState === true
                  ? "(per year )"
                  : "(per month)"}
              </p>
              <p className="text-textColor font-bold font-ubuntu text-xl">
                {selectedTypes.switchState === true ? (
                  <p className="text-textColor font-bold font-ubuntu text-lg">
                    ${price}/yr
                  </p>
                ) : (
                  <p className="text-textColor font-bold font-ubuntu text-lg">
                    ${price}/mo
                  </p>
                )}
              </p>
            </div>

            <div className="hidden md:flex mt-10 justify-between items-center py-6">
              <button
                className="text-zinc-400 font-ubuntu font-semibold cursor-pointer w-[120px] h-12 bg-zinc-50 rounded-lg"
                onClick={() => dispatch(setCurrent(2))}
              >
                Go Back
              </button>
              <button
                className="bg-textColor text-white font-ubuntu w-[120px] h-12 flex justify-center items-center rounded-lg cursor-pointer"
                onClick={() => dispatch(setCurrent(4))}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 md:hidden">
        <button
          className="text-zinc-400 font-ubuntu font-semibold cursor-pointer w-[120px] h-12 bg-zinc-50 rounded-lg"
          onClick={() => dispatch(setCurrent(2))}
        >
          Go Back
        </button>
        <button
          className="bg-textColor text-white font-ubuntu w-[120px] h-12 flex justify-center items-center rounded-lg cursor-pointer"
          onClick={() => dispatch(setCurrent(4))}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PageFour;
