import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextColor } from "./themeSlice";
import Button from "@mui/material/Button";
import loginModule from "../../styles/loginSignup/login.module.css";

const Theme = () => {
	const dispatch = useDispatch();

	const color = useSelector((state) => state.theme.color);
	const chngTheme = () => {
		if (color === "black") {
			dispatch(changeTextColor({ color: "red", secondaryColor: "blue" }));
		} else if (color === "red") {
			dispatch(
				changeTextColor({ color: "black", secondaryColor: "rgb(62, 62, 255)" })
			);
		}
	};
	return (
		<div>
			<Button
				className={loginModule.loginBtn}
				variant="contained"
				onClick={chngTheme}
			>
				Change Theme
			</Button>
		</div>
	);
};

export default Theme;
