import React, { useEffect, useState } from "react";
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
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const Navbar = () => {
	const [display, setDisplay] = useState("flex");
	const [searchopen, setSearchopen] = useState(false);
	useEffect(() => {
		window.onresize = () => {
			console.log(window.innerWidth);
			if (window.innerWidth <= 480) {
				setDisplay("none");
			} else {
				setDisplay("flex");
			}
		};
	}, []);

	return (
		<div className={styles.main}>
			{searchopen ? (
				<IconButton
					onClick={() => {
						setSearchopen(false);
					}}
				>
					<KeyboardBackspaceIcon />
				</IconButton>
			) : (
				<></>
			)}
			{!searchopen ? (
				<h2 className={styles.branding}>
					<Link href="/">Daakticket</Link>
				</h2>
			) : (
				<></>
			)}

			<div className={styles.searchBar} style={{ display: display }}>
				<input
					type="text"
					placeholder="Search.."
					className={styles.searchinput}
				/>
			</div>
			{searchopen ? (
				<>
					<div className={styles.searchBar}>
						<input
							type="text"
							placeholder="Search.."
							className={styles.searchinput}
						/>
					</div>
					<IconButton variant="contained" className={styles.searchBtn}>
						<SearchIcon color="info" />
					</IconButton>
				</>
			) : (
				<></>
			)}
			{display === "none" ? (
				<></>
			) : (
				<IconButton variant="contained" className={styles.searchBtn}>
					<SearchIcon color="info" />
				</IconButton>
			)}

			<div className={styles.iconContainer}>
				{display === "none" && !searchopen ? (
					<IconButton
						variant="contained"
						className={styles.searchBtn}
						onClick={() => {
							setSearchopen(true);
						}}
					>
						<SearchIcon color="info" />
					</IconButton>
				) : (
					<></>
				)}

				<ul className={styles.nav_icons}>
					<li className={styles.homeicon}>
						<Link href="../Home/home">
							<IconButton aria-label="Home" color="inherit">
								<HomeRoundedIcon />
							</IconButton>
						</Link>
					</li>
					<li className={styles.peopleicon}>
						<Link href="/friends">
							<IconButton aria-label="Home" color="inherit">
								<PeopleAltRoundedIcon />
							</IconButton>
						</Link>
					</li>
					<li className={styles.notificationicon}>
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
					<li className={styles.gameicon}>
						<Link href="/search">
							<IconButton aria-label="Games" color="inherit">
								<GamesIcon />
							</IconButton>
						</Link>
					</li>
					<li className={styles.menuicon}>
						<Link href="../Home/menulist">
							<IconButton aria-label="Menu" color="inherit">
								<MenuIcon />
							</IconButton>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
