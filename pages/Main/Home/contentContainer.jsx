import React from "react";
import style from "../../../styles/Home/home.module.css";
import Contents from "./contents";
import SharedContent from "./SharedContent";
import Paper from "@mui/material/Paper";
const ContentContainer = () => {
	return (
		<>
			<div className={style.containerSection2}>
				<Paper elevation={1} className={style.section2}>
					<Contents />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={1} className={style.section2}>
					<SharedContent />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={1} className={style.section2}>
					<Contents />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={1} className={style.section2}>
					<Contents />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={1} className={style.section2}>
					<Contents />
				</Paper>
			</div>
			<div className={style.containerSection2}>
				<Paper elevation={1} className={style.section2}>
					<Contents />
				</Paper>
			</div>
		</>
	);
};

export default ContentContainer;
