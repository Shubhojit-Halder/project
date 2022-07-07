import React, { useState } from "react";
import style from "../../styles/Component styles/Floatingchat.module.css";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Followers from "../Main/Home/Followers";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CommentIcon from "@mui/icons-material/Comment";
import { FcSearch } from "react-icons/fc";
const Floatingchat = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className={style.main}>
			<div className={style.header}>
				<div className={style.messagetxt}>
					<CommentIcon />
					<span style={{ paddingLeft: "10px" }}>Messages</span>
				</div>
				<div
					className={style.buttonup}
					onClick={() => {
						setOpen((prev) => !prev);
					}}
				>
					<IconButton aria-label="delete">
						{open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
					</IconButton>
				</div>
			</div>
			{open ? (
				<div className={style.friendslist}>
					<div className={style.searchbar}>
						<input type="text" className={style.searchinput} />
						<IconButton>
							<FcSearch />
						</IconButton>
					</div>
					<Followers chat={true} />
					<Followers chat={true} />
					<Followers chat={true} />
					<Followers chat={true} />
					<Followers chat={true} />
					<Followers chat={true} />
					<Followers chat={true} />
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Floatingchat;
