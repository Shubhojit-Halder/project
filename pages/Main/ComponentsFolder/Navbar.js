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
import GamesIcon from "@mui/icons-material/Games";
import Button from "@mui/material/Button";
const Navbar = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.branding}>
        <Link href="/">Daakticket</Link>
      </h2>
      {/* <div className={styles.searchBar}>
        <input type="text" placeholder="Search.." />
        <Button variant="contained" className={styles.searchBtn}>
          <SearchIcon />
        </Button>
      </div> */}
      <ul className={styles.nav_icons}>
        {/* <li><div className={styles.searchBar}>
        <input type="text" placeholder="Search.." />
        <Button variant="contained" className={styles.searchBtn}>
          <SearchIcon />
        </Button>
      </div></li> */}
        <li>
          <Link href="../Home/home">
            <IconButton aria-label="Home" color="inherit">
            <HomeRoundedIcon />
            </IconButton>
          </Link>
        </li>
        <li>
          <Link href="/friends">
          <IconButton aria-label="Home" color="inherit">
            <PeopleAltRoundedIcon />
            </IconButton>
          </Link>
        </li>
        <li>
          <Link href="/notification">
            <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
            <Badge badgeContent={15} color="error">
              <NotificationsRoundedIcon />
            </Badge>
            </IconButton>
          </Link>
        </li>
        <li>
          <Link href="/search">
          <IconButton aria-label="Games" color="inherit">

            <GamesIcon />
            </IconButton>
          </Link>
        </li>
        <li>
          <Link href="../Home/menulist" >
          <IconButton aria-label="Menu" color="inherit">
            
            <MenuIcon />
            </IconButton>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
