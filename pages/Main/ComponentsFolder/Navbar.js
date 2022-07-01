import React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import styles from "../../../styles/Component styles/navbar.module.css";
import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import GamesIcon from '@mui/icons-material/Games';
const Navbar = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.branding}><Link href="/">HexaOverflow </Link></h2>
        <ul className={styles.nav_icons}>
          <li>
            <Link href="/home">
              <HomeRoundedIcon />
            </Link>
          </li>
          <li>
            <Link href="/friends">
              <PeopleAltRoundedIcon />
            </Link>
          </li>
          <li>
            <Link href="/notification">
              {/* <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              > */}
                <Badge badgeContent={15} color="error">
                  <NotificationsRoundedIcon />
                </Badge>
              {/* </IconButton> */}
            </Link>
          </li>
          <li>
            <Link href="/search">
              <GamesIcon />
            </Link>
          </li>
          <li>
            <Link href="/menu">
              <MenuIcon />
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default Navbar;
