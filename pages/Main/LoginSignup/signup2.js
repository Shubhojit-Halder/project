import React, { useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "next/link";
import signUpModule2 from "../../../styles/loginSignup/signup2.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import WcIcon from "@mui/icons-material/Wc";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PasswordIcon from "@mui/icons-material/Password";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CountrySelect from "../ComponentsFolder/CountrySelection";
import country_codes from "../ComponentsFolder/countryCodes";
import axios from "axios";

const Signup2 = () => {
	const [data, setData] = useState({
		pin_code: "",
		country_code: "",
		dob: "2022-06-29",
		user_id: "",
	});
	const [loading, setLoading] = useState(false);
	return (
		<div className={signUpModule2.mainDiv}>
			<div className={signUpModule2.inputs_login}>
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
					<Paper elevation={3} className={signUpModule2.input_box_container}>
						<div className={signUpModule2.design}>
							<h1 className={signUpModule2.brandName}>HexaOverflow</h1>
							<h2>Let's get started !!</h2>
							<p className={signUpModule2.signupPara}>
								Enter details to continue
							</p>

							<Box sx={{ "& > :not(style)": { m: 2 } }}>
								<div className={signUpModule2.inputfield}>
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
											label="Enter Pincode"
											value={data.pin_code}
											onChange={(e) => {
												setData((prev) => {
													return { ...prev, pin_code: e.target.value };
												});
											}}
											autoComplete="off"
										/>
									</Box>
									<Box
										sx={{
											display: "inline-block",
											alignItems: "flex-end",
											my: 2,
											ml: 2,
										}}
									>
										<CalendarMonthRoundedIcon
											className={signUpModule2.calender}
											sx={{ mr: 2, my: 2 }}
										/>
										<TextField
											required
											id="outlined-required"
											label="Enter Date of Birth"
											value={data.dob}
											onChange={(e) => {
												setData((prev) => {
													return { ...prev, dob: e.target.value };
												});
											}}
											type="date"
											autoComplete="off"
										/>
									</Box>
									{/* <Box sx={{ display: "inline-block", alignItems: "flex-end",ml:2 }}>
                    <PasswordIcon className={signUpModule2.passwordIcon} sx={{ mr: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter the OTP"
                      defaultValue=""
                      autoComplete="off"
                    />
                  </Box> */}
									<Box
										sx={{
											display: "inline-block",
											alignItems: "flex-end",
											ml: 2,
										}}
									>
										<CountrySelect />
									</Box>
									{/* <Box sx={{ display: "inline-block", alignItems: "flex-end",my:2,ml:2 }}>
                    <PublicIcon className={signUpModule2.calender} sx={{ mr: 2, my: 2 }} />
                    <CountrySelect/>
                  </Box> */}
									{/* <FormHelperText classname={signUpModule2.formhelptext} >OTP has been sent to your email</FormHelperText> */}
								</div>
								<div className={signUpModule2.signupBtnDiv}>
									{/* <Link href={"/Main/LoginSignup/OTPpage"}> */}
									<LoadingButton
										className={signUpModule2.signupBtn}
										variant="contained"
										endIcon={<ArrowForwardIosRoundedIcon />}
										loading={loading}
										loadingPosition="end"
										onClick={() => {
											setData((prev) => {
												return {
													...prev,
													country_code: localStorage.getItem("country_code"),
													user_id: localStorage.getItem("user_id"),
												};
											});
											if (
												data.country_code &&
												data.dob &&
												data.pin_code &&
												data.user_id
											) {
												setLoading(true);

												axios
													.post("http://localhost:8000/addressset/", data)
													.then((a) => {
														console.log(a.data);
														setLoading(false);
													});
											}
										}}
									>
										Send OTP
									</LoadingButton>
									{/* </Link> */}
								</div>
							</Box>
						</div>
					</Paper>
				</Box>
				<div className={signUpModule2.sidePara}>
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
