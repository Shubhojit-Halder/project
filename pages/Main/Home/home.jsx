import React, { useEffect, useState } from "react";
import Navbar from "../ComponentsFolder/Navbar";
import Grid from "@mui/material/Grid";
import style from "../../../styles/Home/home.module.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Profile from "./profile";
import MenuList from "./menulist";
const Home = () => {
	const [div, setDiv] = useState(false);
	useEffect(() => {
		var div = document.getElementById("main");
		div.onscroll = () => {
			if (div.scrollTop > 874) {
				setDiv(true);
			} else {
				setDiv(false);
			}
		};
	}, []);

	return (
		<div>
			<Navbar/>

			<div className={style.main} id="main">
				<div className={style.gridMain}>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid item xs={0} sm={0} md={0} lg={3}>
								<Paper elevation={3} className={style.section1} />
								<Box mt={3}>
									<Paper
										elevation={3}
										className={style.section6}
										style={{ minHeight: "250px" }}
									>
										<Profile />
									</Paper>
								</Box>

								<Paper
									elevation={3}
									id="section4"
									className={style.section4}
									style={{ height: "350px" }}
								>
									<MenuList></MenuList>
								</Paper>
								{div ? (
									<>
										<div className={style.hold}>
											<Paper
												elevation={3}
												className={style.section7}
												style={{ height: "350px" }}
											>
												<MenuList></MenuList>
											</Paper>
										</div>
									</>
								) : (
									<></>
								)}
							</Grid>
							<Grid item xs={12} sm={11} md={7} lg={6}>
								<div className={style.postContainer}>
									<div className={style.containerSection2}>
										<Paper
											elevation={3}
											className={style.section2}
											style={{
												height: "200px",
												marginBottom: "30px",
											}}
										/>
									</div>
									<div className={style.containerSection2}>
										<Paper elevation={3} className={style.section2} />
									</div>
									<div className={style.containerSection2}>
										<Paper elevation={3} className={style.section2} />
									</div>
									<div className={style.containerSection2}>
										<Paper elevation={3} className={style.section2} />
									</div>
									<div className={style.containerSection2}>
										<Paper elevation={3} className={style.section2} />
									</div>
									<div className={style.containerSection2}>
										<Paper elevation={3} className={style.section2} />
									</div>
									<div className={style.containerSection2}>
										<Paper elevation={3} className={style.section2} />
									</div>
								</div>
							</Grid>
							<Grid item xs={0} sm={0} md={4} lg={3}>
								<div className={style.containerSection34}>
									<Paper elevation={3} className={style.section3} />

									<Paper elevation={3} className={style.section5} />
									{div ? (
										<div className={style.hold2}>
											<Paper elevation={3} className={style.section5} />
										</div>
									) : (
										<></>
									)}
								</div>
							</Grid>
						</Grid>
					</Box>
				</div>
			</div>
		</div>
	);
};

export default Home;
