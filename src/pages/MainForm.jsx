import React from "react";
import TextField from "@mui/material/TextField";

const MainForm = () => {
  return (
    <div>
      <div className="relative w-full h-[550px] bg-blue-100">
        <div className="container mx-auto p-4 flex flex-col justify-center items-center md:hidden">
          <div className="absolute -top-20 bg-white w-[360px] h-[480px] border rounded-lg">
            <div className="flex flex-col items-start h-full p-8">
              <h2 className="text-2xl text-blue-900" id="info">
                Personal info
              </h2>

              <p className="font-ubuntu mt-2" id="text">
                Please Provide your name, email address, and phone number.
              </p>
              <div className="mt-4">
                <TextField
                  sx={{ width: "300px" }}
                  label="Full Name"
                  name="fullName"
                  variant="outlined"
                  placeholder="Full Name"
                  margin="normal"
                  color="primary"
                  required
                  //   error={!validName && nameFocus}
                  //   inputRef={userRef}
                  autoFocus={true}
                  //   onFocus={() => setNameFocus(true)}
                  //   onBlur={() => setNameFocus(false)}
                  //   value={userDetails.name}
                  helperText={"Please enter your full name"}
                  // onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })"}
                  //   onChange={(e) =>
                  // dispatch(
                  //   setUserDetails({ ...userDetails, name: e.target.value })
                  // )
                  //   }
                />
              </div>
              <div className="">
                <TextField
                  sx={{ width: "300px" }}
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  placeholder="Email Address"
                  margin="normal"
                  color="primary"
                  type="email"
                  // error={!validMail && userFocus}
                  // inputRef={userRef}
                  // onFocus={() => setUserFocus(true)}
                  // onBlur={() => setUserFocus(false)}
                  helperText={"Please enter a valid email address"}
                  required
                  // value={userDetails.email}
                  // onChange={(e) =>
                  // dispatch(
                  // setUserDetails({ ...userDetails, email: e.target.value })
                  // )
                  // }
                />
              </div>
              <div className="">
                <TextField
                  sx={{ width: "300px" }}
                  label="Phone number"
                  name="phone"
                  variant="outlined"
                  type="tel"
                  // error={!validPhone && phoneFocus}
                  // onFocus={() => setPhoneFocus(true)}
                  // onBlur={() => setPhoneFocus(false)}
                  helperText={"Please enter a valid phone number"}
                  required
                  placeholder="+1 234 567 890"
                  margin="normal"
                  color="primary"
                  // value={userDetails.phone}
                  // onChange={(e) =>
                  // dispatch(
                  // setUserDetails({ ...userDetails, phone: e.target.value })
                  // )
                  // }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center p-4">
        <button className="bg-blue-900 text-white font-ubuntu w-[120px] h-12 flex justify-center items-center rounded-lg cursor-pointer">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default MainForm;
