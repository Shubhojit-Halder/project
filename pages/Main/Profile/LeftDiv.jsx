import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import styles from "../../../styles/ProfileCss/LeftDiv.module.css";
import Button from "@mui/material/Button";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import TagIcon from "@mui/icons-material/Tag";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RecentPhotos from "./RecentPhotos";
import Link from "next/link";
const LeftDiv = () => {
  return (
    <div className={styles.list} >
      <ul>
        <Link href={"./"}>
          <li>
            <MailOutlineIcon />
            <span> Messages </span>
          </li>
        </Link>
        <Link href={"./"}>
          <li>
            <BookmarkBorderRoundedIcon />
            <span> Bookmarks </span>
          </li>
        </Link>
        <Link href={"./"}>
          <li>
            <TagIcon />
            <span> Trending </span>
          </li>
        </Link>
        <Link href={"./"}>
          <li>
            <PeopleAltOutlinedIcon />
            <span>Followers</span>
          </li>
        </Link>
        <li>
          <Button variant="outlined" className={styles.shareBtn}>
            Share
          </Button>
        </li>
      </ul>
      <RecentPhotos />
    </div>
  );
};

export default LeftDiv;
