import React, { useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "next/link";
import styles from "../../../styles/loginSignup/otppage.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PasswordIcon from '@mui/icons-material/Password';
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";


const Signup2 = () => {
	const [otp, setOTP] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [loading2, setLoading2] = React.useState(false);
	const [color, setColor] = useState("primary");
	const handleChange = (event) => {
		setSex(event.target.value);
	};
	return (
		<div className={styles.mainDiv}>
			<div className={styles.inputs_login}>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						"& > :not(style)": {
							m: 1,
							// width: 600,
							// height: 530,
						},
					}}
				>
					<Paper elevation={3} className={styles.input_box_container}>
						<div className={styles.design}>
							<h1 className={styles.brandName}>HexaOverflow</h1>
							<h2>Let's get started !!</h2>
							<p className={styles.signupPara}>Enter details to continue</p>


							<Box sx={{ "& > :not(style)": { ml: 2 } }}>
								<div className={styles.inputfield}>
									<Box
										sx={{
											display: "inline-block",
											alignItems: "flex-end",
											ml: 2,
										}}
									>
										<LocationCityRoundedIcon sx={{ mr: 2, my: 2 }} />
										<TextField
											required
											id="outlined-required"
											label="Enter your OTP"
											value={otp}
											onChange={(e) => {
												setOTP(e.target.value);
											}}
											autoComplete="off"
										/>
									</Box>
								</div>
								<div className={styles.signupBtnDiv}>
									<LoadingButton
										className={styles.sendOTPBTN}
										loading={loading}
										onClick={() => {
											var user_id = localStorage.getItem("user_id");
											setLoading(true);
											axios
												.post("http://localhost:8000/sendotp/", {
													user_id: user_id,
												})
												.then((a) => {
													console.log(a.data);
													setLoading(false);
													alert("Check your email we have send OTP");
												});
										}}
									>
										Send OTP
									</LoadingButton>

									<LoadingButton
										className={styles.signupBtn}
										variant="contained"
										endIcon={<ArrowForwardIosRoundedIcon />}
										loading={loading2}
										loadingPosition="end"
										color={color}
										onClick={() => {
											setLoading2(true);
											axios
												.post("http://localhost:8000/emailverify/", {
													user_id: localStorage.getItem("user_id"),
													otp_get: otp,
												})
												.then((a) => {
													if (a.data.verified) {
														setColor("success");
														let user_id = localStorage.getItem("user_id");
														localStorage.clear();
														localStorage.setItem("user_id", user_id);
													} else {
														setColor("error");
													}
													setLoading2(false);
												});
										}}
									>
										Signup
									</LoadingButton>
								</div>
							</Box>
						</div>
					</Paper>
				</Box>
				<div className={styles.sidePara}>
					<h1>Discover a new world with us.</h1>
					<p>
						We're here to give you a better social media experience where you
						can learn and grow without losing a single bit of fun.
					</p>
				</div>
			</div>
		</div>
	);

};

export default Signup2;
