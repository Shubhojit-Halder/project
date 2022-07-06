import React from "react";
import styles from "../../../styles/ProfileCss/IndividualProfile.module.css";
import Button from "@mui/material/Button";
import Navbar from "../../Main/ComponentsFolder/Navbar";
import Profile from "../Home/profile";
import Post from "../Home/post";
import Image from "next/image";
import profileImg from "../../../public/images/food.jpg";
import coverImg from "../../../public/images/profilebackground.jpg";
import ContentContainer from '../Home/contentContainer'
const IndvidualProfile = () => {
  return (
    <>
      <div className={styles.wholePage}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.imageDiv}></div>
          <div className={styles.profileImage}>
            <Image
              src={profileImg}
              height={300}
              width={300}
              layout="fill"
              className={styles.image}
            />
          </div>
          <div className={styles.profileName}>
            <div className={styles.nameContainer}>
              <div className={styles.name}>
                Subhradeep Pal
                <br />
              </div>
              <div className={styles.identity}>
                Student of Meghnad Saha Institute of Technology
              </div>
            </div>
          </div>
        </div>
        <ContentContainer/>
      </div>
      {/* <div className={styless.mainDiv}>
          <div className={styless.coverPhoto}>
            <Image
              src={coverImg}
              className={styless.coverImg}
              width={700}
              height={350}
            />
          </div>
          <div className={styless.profilePic}>
            <Image
              src={profileImg}
              className={styless.profileImg}
              width={200}
              height={200}
            />
          </div>
          <div className={styless.name}>
            <h3>Shubhojit Halder</h3>
            <Button variant="contained" className={styless.editProfileBtn}>
              Edit Profile
            </Button>
          </div>
        </div>
        <div className={styless.postss}>
    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, itaque explicabo doloremque natus pariatur excepturi numquam aut repudiandae ipsa soluta quod facilis nostrum tempore incidunt qui obcaecati nesciunt nam veniam!</h2>
        </div>
      </div> */}
    </>
  );
};
export default IndvidualProfile;
