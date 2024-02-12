import { createSlice } from "@reduxjs/toolkit";
import image1 from "./../../assets/bg/icon-arcade.svg";
import image2 from "./../../assets/bg/icon-advanced.svg";
import image3 from "./../../assets/bg/icon-pro.svg";

// const calculatePriceMonthly = (selectedTypes) => {
//   if (selectedTypes === "arcade") {
// return 9;
//   } else if (selectedTypes === "advanced") {
// return 12;
//   } else if (selectedTypes === "pro") {
// return 15;
//   }
// };
// const calculatePriceYearly = (selectedTypes) => {
//   if (selectedTypes === "arcade") {
// return 90;
//   } else if (selectedTypes === "advanced") {
// return 120;
//   } else if (selectedTypes === "pro") {
// return 150;
//   }
// };

// const calculateTotalPriceMonthly = (selectedAddOns, selectedTypes) => {
//   let total = calculatePriceMonthly(selectedTypes);
//   for (const addOn in selectedAddOns) {
// if (selectedAddOns[addOn].selected) {
//   total += selectedAddOns[addOn].price;
// }
//   }
//   return total;
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

const initialState = {
  steps: 1,
  current: 0,
  focusedIndex: 0,
  userDetails: {
    name: "",
    email: "",
    phone: "",
  },
  selectedPlan: plans[0].monthly,
  selectedTypes: { switchState: false },

  //   selectedAddOns: {
  // onlineService: {
  //   selected: false,
  //   price: 1,
  //   name: "Online service Access to multiplayer games",
  // },
  // largerStorage: {
  //   selected: false,
  //   price: 2,
  //   name: "Larger storage Extra 1TB of cloud save",
  // },
  // customizableProfile: {
  //   selected: false,
  //   price: 2,
  //   name: "Customizable Profile Custom theme on your profile",
  // },
  //   },
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
    // setSelectedAddOns: (state, { payload }) => {
    //   state.selectedAddOns = payload;
    //   state.total = calculateTotalPrice(
    // state.selectedAddOns,
    // state.selectedTypes
    //   );
    // },
    // toggleAddOn: (state, action) => {
    //   const { addOn } = action.payload;
    //   state.selectedAddOns[addOn].selected =
    // !state.selectedAddOns[addOn].selected;
    //   state.total = calculateTotalPrice(
    // state.selectedAddOns,
    // state.selectedTypes
    //   );
    // },
    setSelectedTypes: (state) => {
      state.selectedTypes.switchState = !state.selectedTypes.switchState;
      state.selectedPlan = state.selectedTypes.switchState
        ? plans[0].yearly
        : plans[0].monthly;
      // state.subscriptionType = state.switchState ? "year" : "month";
      // state.total = calculatePrice(state.selectedTypes);
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },

    // setPrice: (state) => {
    //   state.total = calculatePrice(state.selectedTypes);
    // },
    // setTotalPriceMonthly: (state) => {
    //   state.total = calculateTotalPriceMonthly(state.selectedAddOns);
    // },
    // setTotalPriceYearly: (state) => {
    //   state.total = calculateTotalPriceYearly(state.selectedAddOns);
    // },
    //   },
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
} = inputSlice.actions;
export default inputSlice.reducer;
