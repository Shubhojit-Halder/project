import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ProfilePicture from "./profilePicture";
import style from "../../../styles/Home/Followers.module.css";
import Tooltip from "@mui/material/Tooltip";
const Followers = () => {
	return (
		<div style={{ cursor: "pointer" }} className={style.followmain}>
			<List dense={true}>
				<ListItem
					secondaryAction={
						<Tooltip title="Follow">
							<IconButton edge="end" aria-label="delete">
								<PersonAddIcon color="primary" />
							</IconButton>
						</Tooltip>
					}
				>
					<div className={style.profile}>
						<ProfilePicture />
					</div>

					<ListItemText
						primary="Single-line item"
						secondary={"Secondary text"}
					/>
				</ListItem>
			</List>
		</div>
	);
};

export default Followers;
