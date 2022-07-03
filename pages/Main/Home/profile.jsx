import React from "react";
import style from "../../../styles/Home/profile.module.css";
import image from "../../../public/images/img2.jpg";
import Image from "next/image";
const Profile = () => {
	console.log(style);
	return (
		<div className={style.main}>
			<div className={style.imageDiv}></div>
			<div className={style.profileImage}>
				<Image
					src={image}
					height={100}
					width={100}
					layout="fill"
					className={style.image}
				/>
			</div>
			<div className={style.profileName}>
				<div className={style.nameContainer}>
					<div className={style.name}>
						Subhradeep Pal
						<br />
					</div>
					<div className={style.identity}>
						Student of Meghnad Saha Institute of Technology
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
