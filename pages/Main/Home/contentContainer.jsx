import React from "react";
import style from "../../../styles/Home/home.module.css";
import Contents from "./contents";
import Paper from "@mui/material/Paper";
const ContentContainer = () => {
	return (
		<>
			<div className={style.containerSection2}>
				<Paper elevation={3} className={style.section2}>
					<Contents />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={3} className={style.section2}>
					<Contents />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={3} className={style.section2}>
					<Contents />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={3} className={style.section2}>
					<Contents />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={3} className={style.section2}>
					<Contents />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={3} className={style.section2}>
					<Contents />
				</Paper>
			</div>
		</>
	);
};

export default ContentContainer;
