import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import loginModule from "../../../styles/loginSignup/login.module.css";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';
import img from "../../../public/images/img.png"
const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [loading, setLoading] = useState(false)
	return (
		<div className={loginModule.mainDiv}>
			<div className={loginModule.inputs_login}>
				<Box
					className={loginModule.box}
					sx={{
						display: "flex",
						flexWrap: "wrap",
						"& > :not(style)": {
							m: 1,
							width: 350,
							height: 500,
						},
					}}
				>
					<Paper elevation={3} className={loginModule.paper}>
						<div className={loginModule.design}>
							<h1 className={loginModule.brandName}>HexaOverflow</h1>
							<h2>Welcome Back !!</h2>
							<p className={loginModule.logP}>Login to continue</p>
							<Box sx={{ "& > :not(style)": { m: 1.5 } }}>
								<Box sx={{ display: "block", alignItems: "flex-end" }}>
									<AccountCircle sx={{ mr: 2, my: 2 }} />
									<TextField
										required
										id="outlined-required"
										label="Enter your email"
										value={data.email}
										onChange={(e) => {
											setData((prev) => {
												return { ...prev, email: e.target.value };
											});
										}}
										autoComplete="off"
									/>
								</Box>
								<Box sx={{ display: "block", alignItems: "flex-end" }}>
									<LockIcon sx={{ mr: 2, my: 2 }} />
									<TextField
										required
										id="outlined-password-input"
										label="Password"
										type="password"
										value={data.password}
										onChange={(e) => {
											setData((prev) => {
												return { ...prev, password: e.target.value };
											});
										}}
										autoComplete="current-password"
									/>
								</Box>
							</Box>
							<LoadingButton
								className={loginModule.loginBtn}
								variant="contained"
								loading={loading}
								onClick={() => {
									setLoading(true);
									axios.post("http://localhost:8000/login/", data).then((a) => {
										console.log(a);
										if (a.data.id) {
											alert("Login Successful");
										}
										setLoading(false);
									});
								}}
							>
								LogIn
							</LoadingButton>
							<Button variant="text" className={loginModule.forgotBtn}>
								Forgot Password ?
							</Button>

							<div className={loginModule.socialAccouts}>
								<ul>
									<li> Login with</li>
									<li className={loginModule.google}>
										<GoogleIcon />
									</li>
									<li className={loginModule.facebook}>
										<FacebookIcon />
									</li>
									<li className={loginModule.insta}>
										<InstagramIcon />
									</li>
								</ul>
							</div>
						</div>
					</Paper>
				</Box>

				<Image
					src={img}
					alt="Picture of the author"
					width={600}
					height={300}
					className={loginModule.img}
				/>
			</div>
		</div>
	);
};

export default Login;
