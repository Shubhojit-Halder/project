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
import TextField from "@mui/material/TextField";
import Comments from "./comments";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Contents = () => {
	const [more, setMore] = React.useState(false);
	var s =
		"<span>Project<span> Is Done by ,\nHexa Overflow\nHexa Overflow\nHexa Overflow\nHexa Overflow";
	return (
		<div className={style.main2}>
			<div className={style.uppergrid}>
				<ProfilePicture />
				<div className={style.owner}>
					<span
						className={style.name}
					>{`Subhradeep Pal Shared SeP's post`}</span>
					<span className={style.time}>Time : 2 days ago</span>
				</div>
				<div className={style.owner}></div>
				<div>
					<Menu />
				</div>
			</div>
			<div className={style.textContainer}>
				<span className={style.text}>
					{!more ? ReactHtmlParser(s.slice(0, 50)) : ReactHtmlParser(s)}
				</span>
				<br />
				<span
					style={{ fontWeight: "700", cursor: "pointer", fontSize: "12px" }}
					onClick={() => {
						setMore((pre) => !pre);
					}}
				>
					{!more ? " Show More..." : " Show Less"}
				</span>
			</div>
			<div className={style.ownercontainer}>
				<div className={style.uppergridd}>
					<ProfilePicture />
					<div className={style.owner}>
						<span className={style.name}>Subhradeep Pal</span>
						<span className={style.time}>Time : 2 days ago</span>
					</div>
					<div></div>
					<div></div>
				</div>
				<div className={style.textContainer}>
					<span className={style.text}>
						{!more ? ReactHtmlParser(s.slice(0, 50)) : ReactHtmlParser(s)}
					</span>
					<br />
					<span
						style={{ fontWeight: "700", cursor: "pointer", fontSize: "12px" }}
						onClick={() => {
							setMore((pre) => !pre);
						}}
					>
						{!more ? " Show More..." : " Show Less"}
					</span>
				</div>
				<div className={style.imageDiv}>
					<img
						src="https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg"
						width="100%"
						height="auto"
						alt="Image"
					/>
				</div>
			</div>
			<div className={style.reactDiv}>
				<div className={style.item}>
					<IconButton size="large">
						<FcLike size={30} />
					</IconButton>
					<span>9</span>
				</div>

				<div className={style.item}>
					<IconButton size="large">
						<FcComments size={30} />
					</IconButton>
					<span>8</span>
				</div>
				<div className={style.item}>
					<IconButton size="large">
						<FcShare size={30} />
					</IconButton>
					<span>2</span>
				</div>
			</div>
			<div className={style.commentsection}>
				<div className={style.commentgrid}>
					<ProfilePicture />
					<div className={style.textarea}>
						<textarea
							name=""
							id=""
							className={style.commentadd}
							cols="30"
							rows="10"
						></textarea>
					</div>
				</div>
				<div>
					<div className={style.showpreviouscomments}>
						<span>
							Show Previous Comments
							<KeyboardArrowUpIcon fontSize="small" />
						</span>
					</div>
					<Comments />
					{/* <Comments />
					<Comments /> */}
				</div>
			</div>
		</div>
	);
};

export default Contents;
