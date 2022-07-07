import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from "../../../styles/ChatStyles/contactList.module.css";
import Image from "next/image";
import img from "../../../public/images/food.jpg";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const ContactList = () => {
  return (
    <div className={styles.contactsMain}>
      <div className={styles.header}>
        <div className={styles.nameImage}>
          <div className={styles.profileImage}>
            <Image
              className={styles.image}
              src={img}
              width="50px"
              height="50px"
            />
          </div>
          <h4 className={styles.ownName}>Shubhojit</h4>
        </div>
        <div className={styles.icons}>
          <PersonSearchIcon
            className={styles.searchIcon}
            sx={{ color: "white" }}
          />
          <MoreVertIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div className={styles.allContacts}>
        <div className={styles.contacts}>
          <div className={styles.contactProfileImage}>
            <Image
              className={styles.contactImage}
              src={img}
              width="50px"
              height="50px"
            />
          </div>
          <h4 className={styles.contactName}>Pubalissssssssssssssssssssssssss</h4>
        </div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        <div className={styles.contacts}>hi</div>
        


      </div>
      </div>
  );
};

export default ContactList;
