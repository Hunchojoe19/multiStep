import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Stepper from "./Stepper";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, setCurrent } from "../redux/slices/inputSlice";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/im;

const MainForm = () => {
  const { userDetails } = useSelector((state) => state.input);
  const { steps } = useSelector((state) => state.input);

  const dispatch = useDispatch();

  const userRef = useRef();

  const [validMail, setValidMail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidMail(emailRegex.test(userDetails?.email));
  }, [userDetails?.email]);
  useEffect(() => {
    setValidPhone(phoneRegex.test(userDetails?.phone));
  }, [userDetails?.phone]);
  useEffect(() => {
    setValidName(userDetails?.name?.length > 0);
  }, [userDetails?.name]);
  useEffect(() => {
    setValid(validMail && validPhone && validName);
  }, [validMail, validPhone, validName]);

  useEffect(() => {
    setErrMsg("");
  }, [userDetails?.email, userDetails?.phone, userDetails?.name]);

  const onClick = () => {
    dispatch(setCurrent(1));
  };

  return (
    <div>
      <div className="relative w-full h-[550px] flex justify-center items-center bg-blue-100 md:bg-white md:h-full">
        <div className="container mx-auto p-4 flex flex-col justify-center items-center md:hidden">
          <div className="absolute -top-20 bg-white shadow-lg w-[360px] h-[480px] border rounded-lg">
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
                  error={!validName && nameFocus}
                  inputRef={userRef}
                  autoFocus={true}
                  onFocus={() => setNameFocus(true)}
                  onBlur={() => setNameFocus(false)}
                  value={userDetails.name}
                  // helperText={"Please enter your full name"}
                  // onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })"}
                  onChange={(e) =>
                    dispatch(
                      setUserDetails({ ...userDetails, name: e.target.value })
                    )
                  }
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
                  error={!validMail && userFocus}
                  inputRef={userRef}
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  // helperText={"Please enter a valid email address"}
                  required
                  value={userDetails.email}
                  onChange={(e) =>
                    dispatch(
                      setUserDetails({ ...userDetails, email: e.target.value })
                    )
                  }
                />
              </div>
              <div className="">
                <TextField
                  sx={{ width: "300px" }}
                  label="Phone number"
                  name="phone"
                  variant="outlined"
                  type="tel"
                  error={!validPhone && phoneFocus}
                  onFocus={() => setPhoneFocus(true)}
                  onBlur={() => setPhoneFocus(false)}
                  // helperText={"Please enter a valid phone number"}
                  required
                  placeholder="+1 234 567 890"
                  margin="normal"
                  color="primary"
                  value={userDetails.phone}
                  onChange={(e) =>
                    dispatch(
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-full h-full flex-col items-center">
          <div className="p-6 mt-8">
            <h2 className="text-2xl text-blue-900" id="info">
              Personal info
            </h2>
            <p className="font-ubuntu mt-2" id="text">
              Please Provide your name, email address, and phone number.
            </p>
            <div className="w-[400px] lg:w-[450px] lg:mt-3">
              <TextField
                sx={{ width: "100%" }}
                label="Full Name"
                name="fullName"
                variant="outlined"
                placeholder="Full Name"
                margin="normal"
                color="primary"
                required
                error={!validName && nameFocus}
                inputRef={userRef}
                autoFocus={true}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                value={userDetails.name}
                helperText={
                  !validName && nameFocus && "Please enter your full name"
                }
                // onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })"}
                onChange={(e) =>
                  dispatch(
                    setUserDetails({ ...userDetails, name: e.target.value })
                  )
                }
              />
            </div>
            <div className="w-[400px] lg:w-[450px] lg:mt-3">
              <TextField
                sx={{ width: "100%" }}
                label="Email Address"
                name="email"
                variant="outlined"
                placeholder="Email Address"
                margin="normal"
                color="primary"
                type="email"
                error={!validMail && userFocus}
                inputRef={userRef}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                helperText={
                  !validMail &&
                  userFocus &&
                  "Please enter a valid email address"
                }
                required
                value={userDetails.email}
                onChange={(e) =>
                  dispatch(
                    setUserDetails({ ...userDetails, email: e.target.value })
                  )
                }
              />
            </div>
            <div className="w-[400px] lg:w-[450px] lg:mt-3">
              <TextField
                sx={{ width: "100%" }}
                label="Phone number"
                name="phone"
                variant="outlined"
                type="tel"
                error={!validPhone && phoneFocus}
                onFocus={() => setPhoneFocus(true)}
                onBlur={() => setPhoneFocus(false)}
                helperText={
                  !validPhone &&
                  phoneFocus &&
                  "Please enter a valid phone number"
                }
                required
                placeholder="+1 234 567 890"
                margin="normal"
                color="primary"
                value={userDetails.phone}
                onChange={(e) =>
                  dispatch(
                    setUserDetails({ ...userDetails, phone: e.target.value })
                  )
                }
              />
            </div>
            <div className="hidden md:flex justify-end items-center py-6">
              <button
                className="bg-blue-900 text-white font-ubuntu w-[120px] h-12 flex justify-center items-center rounded-lg cursor-pointer disabled:opacity-25"
                onClick={onClick}
                disabled={!valid}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center p-4 md:hidden">
        <button
          className="bg-blue-900 text-white font-ubuntu w-[120px] h-12 flex justify-center items-center rounded-lg cursor-pointer disabled:opacity-25"
          onClick={onClick}
          disabled={!valid}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default MainForm;
