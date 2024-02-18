import { createSlice } from "@reduxjs/toolkit";
import image1 from "./../../assets/bg/icon-arcade.svg";
import image2 from "./../../assets/bg/icon-advanced.svg";
import image3 from "./../../assets/bg/icon-pro.svg";

const calculatePrice = (selectedPlan, selectedTypes) => {
  if (selectedTypes === false && selectedPlan.name === "Arcade") {
    return 9;
  } else if (selectedTypes === false && selectedPlan.name === "Advanced") {
    return 12;
  } else if (selectedTypes === false && selectedPlan.name === "Pro") {
    return 15;
  } else if (selectedTypes === true && selectedPlan.name === "Arcade") {
    return 90;
  } else if (selectedTypes === true && selectedPlan.name === "Pro") {
    return 120;
  } else if (selectedTypes === true && selectedPlan.name === "Advanced") {
    return 150;
  }
};
// const calculatePriceYearly = (selectedTypes) => {
//   if (selectedTypes === "arcade") {
// return 90;
//   } else if (selectedTypes === "advanced") {
// return 120;
//   } else if (selectedTypes === "pro") {
// return 150;
//   }
// };

// const calculateTotalPriceYearly = (selectedAddOns, selectedTypes) => {
//   let total = calculatePriceYearly(selectedTypes);
//   for (const addOn in selectedAddOns) {
// if (selectedAddOns[addOn].selected) {
//   total += selectedAddOns[addOn].price;
// }
//   }
//   return total;
// };

const calculateTotal = (selectedAddOns) => {
  let total = 0;
  for (const addOn in selectedAddOns) {
    if (selectedAddOns[addOn].selected === true) {
      total += selectedAddOns[addOn].price;
    }
  }
  return total;
};

const plans = [
  {
    monthly: [
      {
        id: 1,
        name: "Arcade",
        price: 9,
        image: `${image1}`,
      },
      {
        id: 2,
        name: "Advanced",
        price: 12,
        image: `${image2}`,
      },
      {
        id: 3,
        name: "Pro",
        price: 15,
        image: `${image3}`,
      },
    ],
    yearly: [
      {
        id: 1,
        name: "Arcade",
        price: 90,
        free: "2 months free",
        image: `${image1}`,
      },
      {
        id: 2,
        name: "Advanced",
        price: 120,
        free: "2 months free",
        image: `${image2}`,
      },
      {
        id: 3,
        name: "Pro",
        price: 150,
        free: "2 months free",
        image: `${image3}`,
      },
    ],
  },
];
// const menuItems = [
// {
// selected: false,
// label: "Online service",
// description: "Access to multiplayer games",
// price: 1,
// },
// {
// selected: false,
// label: "Larger storage",
// description: "Extra 1TB of cloud save",
// price: 2,
// },
// {
// selected: false,
// label: "Customizable profile",
// description: "Custom theme on your profile",
// price: 2,
// },
// ];
const initialState = {
  steps: 1,
  price: 0,
  current: 0,
  focusedIndex: 0,
  userDetails: {
    name: "",
    email: "",
    phone: "",
  },
  menuItems: [
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
  ],
  selectedPlan: plans[0].monthly,
  selectedTypes: { switchState: false },

  selectedAddOns: [],
  total: 0,
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setSteps: (state, action) => {
      state.steps = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
      state.total = state.selectedPlan.price;
    },
    setFocusedIndex: (state, action) => {
      state.focusedIndex = action.payload;
    },
    setSelectedAddOns: (state, { payload }) => {
      if (Object.keys(payload).length !== 0) {
        if (state.selectedAddOns.includes(payload)) {
          state.selectedAddOns = state.selectedAddOns.filter(
            (item) => item !== payload
          );
        } else {
          state.selectedAddOns.unshift(payload);
        }
      } else {
        state.payload = [];
      }
    },
    toggleAddOn: (state, action) => {
      // state.total = calculateTotalPrice(state.selectedAddOns);
      state.selectedAddOns[action.payload] =
        !state.selectedAddOns[action.payload];
    },
    setSelectedTypes: (state) => {
      state.selectedTypes.switchState = !state.selectedTypes.switchState;
      state.selectedPlan = state.selectedTypes.switchState
        ? plans[0].yearly
        : plans[0].monthly;
    },
    setPrice: (state, action) => {
      state.price = action.payload + state.total;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },

    setHandleCheck: (state, { payload }) => {
      let objIndex = state.menuItems.findIndex(
        (item) => item.label === payload.label
      );

      state.menuItems[objIndex].selected = !state.menuItems[objIndex].selected;
    },
    // setTotalPriceMonthly: (state) => {
    // state.total = calculateTotalPrice(state.selectedAddOns);
    // },
    // setTotalPriceYearly: (state) => {
    // state.total = calculateTotalPriceYearly(state.selectedAddOns);
    // },
    // },
  },
});
export const {
  setUserDetails,
  setSteps,
  setCurrent,
  setSelectedPlan,
  setSelectedTypes,
  setFocusedIndex,
  setTotal,
  setSelectedAddOns,
  toggleAddOn,
  setPrice,
  setHandleCheck,
} = inputSlice.actions;
export default inputSlice.reducer;
