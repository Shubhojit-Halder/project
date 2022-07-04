import React from "react";
import ProfilePicture from "./profilePicture";
import style from "../../../styles/Home/post.module.css";
import PhotoIcon from "@mui/icons-material/Photo";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
const Post = () => {
	return (
		<>
			<div className={style.main}>
				<div className={style.uppergrid}>
					<div className={style.profilePic}>
						<ProfilePicture />
					</div>

					<div className={style.postButtonContainer}>
						<div className={style.postButton}>
							<span>Share Your Things</span>
						</div>
					</div>
				</div>
				<div className={style.lowergrid}>
					<div className={style.loweritem}>
						<PhotoIcon fontSize="large" color="primary" />
						<span className={style.text}> &nbsp;&nbsp;Photo</span>
					</div>
					<div className={style.loweritem}>
						<VideoCameraBackIcon fontSize="large" color="error" />
						<span className={style.text}> &nbsp;&nbsp;Video</span>
					</div>
					<div className={style.loweritem}>
						<EmojiEventsIcon fontSize="large" style={{ color: "orange" }} />
						<span className={style.text}> &nbsp;&nbsp;Achievement</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;
