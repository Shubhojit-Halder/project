import React from "react";
import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import styles from "../../../styles/ProfileCss/RightDiv.module.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Image from "next/image";
import img from "../../../public/images/Chat.jpg";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import IconButton from "@mui/material/IconButton";

const RightDiv = () => {
  return (
    <div className={styles.main}>
      <div className={styles.upper}>
        <p>
          Intro{" "}
          <span>
            {" "}
            <Button
              variant="contained"
              endIcon={<CallMadeIcon fontSize="10px" color="action" />}
              color="inherit"
              style={{
                borderRadius: "40px",
                fontSize: "10px",
                padding: "5px 10px",
              }}
            >
              See All
            </Button>
          </span>{" "}
        </p>

        <ul>
          <li>
            <WorkOutlineOutlinedIcon />
            <span>No workplace to show</span>
          </li>
          <li>
            <SchoolOutlinedIcon />
            <span>Meghnad Saha Institute of Technology</span>
          </li>
          <li>
            <LocationOnOutlinedIcon />
            <span>Behala</span>
          </li>
          <li></li>
        </ul>
      </div>
      <div className={styles.lower}>
        <div className={styles.seeall}>
          <div className={styles.title}>
            <span className={styles.followerstitle}>Pending requests</span>
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
        <div className={styles.allReq}>
          <div className={styles.Req}>
            <Image src={img} width={40} height={40} className={styles.reqImg} />
            <span className={styles.reqName}>Shubhojit Halder</span>
            <IconButton>
              <PersonAddOutlinedIcon />
            </IconButton>
          </div>
          <div className={styles.Req}>
            <Image src={img} width={40} height={40} className={styles.reqImg} />
            <span className={styles.reqName}>Shubhojit Halder</span>
            <IconButton>
              <PersonAddOutlinedIcon />
            </IconButton>
          </div>
          <div className={styles.Req}>
            <Image src={img} width={40} height={40} className={styles.reqImg} />
            <span className={styles.reqName}>Shubhojit Halder</span>
            <IconButton>
              <PersonAddOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightDiv;
