import React from "react";
import styles from "../../../styles/ProfileCss/IndividualProfile.module.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Navbar from "../../Main/ComponentsFolder/Navbar";
import Link from "next/link";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import profileImg from "../../../public/images/food.jpg";
import ContentContainer from "../Home/contentContainer";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import FollowersComponent from "../Home/FollowersComponent.jsx";
import { Paper } from "@mui/material";
import RecentPhotos from "./RecentPhotos";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";
const IndvidualProfile = () => {
  return (
    <>
      <div className={styles.wholePage}>
        <Navbar />
        <Grid container spacing={0}>
          <Grid
            item
            xs={0}
            sm={4.1}
            md={3}
            className={styles.leftDiv}
          >
           <LeftDiv/> 

          </Grid>

          <Grid item xs={12} sm={7.2} md={6.2} sx={{ mb: 10, mx: 1 }}>
            <div className={styles.main}>
              <div className={styles.imageDiv}>
                <Link href="../Home/home">
                  <IconButton className={styles.backBtn}>
                    <ArrowBackIosRoundedIcon />
                  </IconButton>
                </Link>
              </div>
              <div className={styles.profileImage}>
                <Image
                  src={profileImg}
                  height={250}
                  width={250}
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
                  <div className={styles.editingButtons}>
                    <Button className={styles.editBtn} variant="outlined">
                      <EditOutlinedIcon />
                      Edit Profile
                    </Button>
                    <Button className={styles.followerBtn} variant="outlined">
                      <PeopleAltOutlinedIcon /> Following
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={0} sm={0} md={2.5} className={styles.PhotosGrid} >
            <RightDiv/>
         </Grid>
         <Grid item xs={12} sm={12} md={12} className={styles.BioGrid} >

         <div className={styles.bioData}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  labore est dignissimos dolorem nisi explicabo ex autem?
                  Aliquam dolores molestias quibusdam perferendis velit
                  necessitatibus? Explicabo vel iusto nisi consequuntur natus!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, sint sed. Accusantium quos quam mollitia sint
                  dignissimos eveniet sunt possimus.
                </div>
         </Grid>

          <Grid item xs={12} sm={12} md={12} sx={{ mx: 1, mt: 15 }} className={styles.contents}>
            <ContentContainer className={styles.ContentContainer} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default IndvidualProfile;
