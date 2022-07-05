import React from "react";
import style from "../../../styles/Home/contents.module.css";
import ProfilePicture from "./profilePicture";
import Menu from "./menu";
import styledEngine from "@mui/styled-engine";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import { IconButton } from "@mui/material";
const Contents = () => {
	return (
		<div className={style.main}>
			<div className={style.uppergrid}>
				<ProfilePicture />
				<div className={style.owner}>
					<span className={style.name}>Subhradeep Pal</span>
					<span className={style.time}>Time : 2 days ago</span>
				</div>
				<div></div>
				<div>
					<Menu />
				</div>
			</div>
			<div className={style.textContainer}>
				<span className={style.text}>
					{ReactHtmlParser(
						"<span>Project<span> Is Done by ,\nHexa Overflow\nHexa Overflow\nHexa Overflow\nHexa Overflow"
					)}
				</span>
			</div>
			<div className={style.imageDiv}>
				<img
					src="https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg"
					width="100%"
					height="auto"
				/>
			</div>
			<div className={style.reactDiv}>
				<div className={style.item}>
					<IconButton size="large">
						<FcLike size={30} />
					</IconButton>
				</div>

				<div className={style.item}>
					<IconButton size="large">
						<FcComments size={30} />
					</IconButton>
				</div>
				<div className={style.item}>
					<IconButton size="large">
						<FcShare size={30} />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Contents;