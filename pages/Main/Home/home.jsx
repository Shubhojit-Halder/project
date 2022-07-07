import React, { useEffect, useState } from "react";
import Navbar from "../ComponentsFolder/Navbar";
import Grid from "@mui/material/Grid";
import style from "../../../styles/Home/home.module.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Profile from "./profile";
import MenuList from "./menulist";
import Post from "./post";
import Contents from "./contents";
import ContentContainer from "./contentContainer";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Followers from "./Followers";
import FollowersComponent from "./FollowersComponent";
import FollowRequests from "./FollowRequests";
import Hashtags from "./Hashtags";
import Floatingchat from "../../floatchat/Floatingchat";
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
		var fab = document.getElementById("fab");
		console.log(fab);
	}, []);

	return (
		<div>
			<Navbar />
			<Floatingchat />
			<div className={style.sobarbap}>
				<div className={style.main} id="main">
					<div className={style.gridMain}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={0} sm={0} md={0} lg={3}>
									<Box>
										<Paper
											elevation={1}
											className={style.section6}
											style={{ minHeight: "250px" }}
										>
											<Profile />
										</Paper>
									</Box>
									<Box mt={1}>
										<Paper elevation={1} className={style.section1}>
											<Hashtags />
										</Paper>
									</Box>

									<Paper
										elevation={1}
										id="section4"
										className={style.section4}
										style={{ height: "320px" }}
									>
										<MenuList></MenuList>
									</Paper>
									{div ? (
										<>
											<div className={style.hold}>
												<Paper
													elevation={1}
													className={style.section7}
													style={{ height: "320px" }}
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
												elevation={1}
												style={{
													height: "130px",
													marginBottom: "30px",
												}}
												className={style.section2c}
											>
												<Post />
											</Paper>
										</div>
										<ContentContainer />
										<div className={style.gap}></div>
									</div>
								</Grid>
								<Grid item xs={0} sm={0} md={4} lg={3}>
									<div className={style.containerSection34}>
										<Paper elevation={1} className={style.section3}>
											<FollowersComponent />
										</Paper>
										<Paper elevation={1} className={style.section5}>
											{/* <div className={style.followers}> */}
											<FollowRequests />
											{/* </div> */}
										</Paper>

										{div ? (
											<div className={style.hold2}>
												<Paper elevation={1} className={style.section5}>
													<FollowRequests />
												</Paper>
												<div className={style.fab} id="fab">
													<Fab
														color="primary"
														aria-label="add"
														onClick={() => {
															var div = document.getElementById("main");
															div.scrollTop = 0;
														}}
													>
														<ArrowUpwardIcon />
													</Fab>
												</div>
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
		</div>
	);
};

export default Home;
