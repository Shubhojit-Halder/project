import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextColor } from "./themeSlice";
import Button from "@mui/material/Button";
import loginModule from "../../styles/loginSignup/login.module.css";


const Theme = () => {
  const dispatch = useDispatch();

  const color = useSelector((state) => state.theme.color);
  const chngTheme = () => {
    if (color === "") {
      dispatch(changeTextColor({ color: "red", secondaryColor: "blue" }));
    } else if (color === "red") {
      dispatch(
        changeTextColor({ color: "", secondaryColor: "rgb(62, 62, 255)" })
      );
    }
  };
  return (
    <div>
      <button
        className={loginModule.loginBtn}
        variant="contained"
        onClick={chngTheme}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Theme;
