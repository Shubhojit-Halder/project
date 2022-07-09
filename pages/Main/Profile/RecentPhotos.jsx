import React from "react";
import styles from "../../../styles/ProfileCss/RecentPhotos.module.css";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Button from "@mui/material/Button";
import Image from "next/image";
import img from "../../../public/images/Chat.jpg";
const RecentPhotos = () => {
  return (
    <div className={styles.main}>
      <div className={styles.seeall}>
        <div className={styles.title}>
          <span className={styles.followerstitle}>Recent Uploads</span>
        </div>
        <Button
variant="outlined"
endIcon={<CallMadeIcon fontSize="10px" color="#fff" />}
className={styles.seeAllBtn}
sx={{
  borderRadius: "40px",
  fontSize: "12px",
  padding: "5px 10px",
  color:"#fff",
  backgroundColor:"#7b00ff",
}}
        >
          See All
        </Button>
      </div>
      <div className={styles.allphotos}>
        <div className={styles.photos}>
          <Image src={img} width={75} height={75} />
        </div>
        <div className={styles.photos}>
          <Image src={img} width={75} height={75} />
        </div>
        <div className={styles.photos}>
          <Image src={img} width={75} height={75} />
        </div>
        <div className={styles.photos}>
          <Image src={img} width={75} height={75} />
        </div>
        
      </div>
    </div>
  );
};

export default RecentPhotos;
