import React from "react";
import Followers from "./Followers";
import style from "../../../styles/Home/Followers.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CallMadeIcon from "@mui/icons-material/CallMade";
const FollowersComponent = () => {
	return (
		<div>
			<div className={style.seeall}>
				<div className={style.title}>
					<span className={style.followerstitle}>You Should Follow</span>
				</div>
				<Button
					variant="contained"
					endIcon={<CallMadeIcon fontSize="10px" color="action" />}
					color="inherit"
					style={{ borderRadius: "40px", fontSize: "10px" }}
				>
					See All
				</Button>
			</div>
			<Followers />
			<Followers />
			<Followers />

			<div className={style.morefollowers}>
				<Button
					variant="contained"
					startIcon={<ExpandMoreIcon color="action" />}
					color="inherit"
					style={{ borderRadius: "40px" }}
				>
					MORE
				</Button>
			</div>
		</div>
	);
};

export default FollowersComponent;
