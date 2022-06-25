import React, { useState } from "react";
import { useDispatch } from "react-redux";
import loginModule from "../styles/loginSignup/login.module.css";
import Button from "@mui/material/Button";

const Component = () => {
	var val = 0;
	const darkPrimary = "#0F0F0F";
	const darkSecondary = "#0072F4";
	const lightPrimary = "";
	const [primaryColor, setPrimaryColor] = useState();
	const dispatch = useDispatch("");
	const chngTheme = () => {
		if ((val = 0)) {
			setPrimaryColor(darkPrimary);
			dispatch();
		}
	};
	return (
		<Button
			className={loginModule.loginBtn}
			variant="contained"
			onClick={chngTheme}
		>
			Theme
		</Button>
	);
};

export default Component;
