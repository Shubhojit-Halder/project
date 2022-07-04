import React, { useEffect } from "react";
import Navbar from "../ComponentsFolder/Navbar";
import Grid from "@mui/material/Grid";
import style from "../../../styles/Home/home.module.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Profile from "./profile";

const Home = () => {
	useEffect(() => {
	  
	var elem = document.getElementById("section4");
	console.log(elem);
	
	}, [])
	
	return (
		<div>
			<Navbar></Navbar>

			<div className={style.main}>
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
									<div className={style.containerhold}>

									<div className={style.hold}>

									<Paper
										elevation={3}
										id="section4"
										className={style.section4}
										style={{ height: "350px" }}
										/>
										</div>
										</div>
								
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
								</div>
							</Grid>
							<Grid item xs={0} sm={0} md={4} lg={3}>
								<div className={style.containerSection34}>
									<Paper elevation={3} className={style.section3} />

									<Paper elevation={3} className={style.section5} />
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
