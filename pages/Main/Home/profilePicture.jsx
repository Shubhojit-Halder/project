import React from "react";
import style from "../../../styles/Home/profilePicture.module.css";
import image from "../../../public/images/img2.jpg";
import Image from "next/image";
const profilePicture = () => {
	return (
		<div className={style.profileImage}>
			<Image src={image} layout="fill" className={style.image} />
		</div>
	);
};

export default profilePicture;
