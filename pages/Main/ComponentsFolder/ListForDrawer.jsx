import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useSelector, useDispatch } from "react-redux";
import { openCloseDrawer } from "../Navbar/NavbarSlice";
import Avatar from "@mui/material/Avatar";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Divider from "@mui/material/Divider";
export default function NestedList() {
	const [open, setOpen] = React.useState(false);
	const dispatch = useDispatch();
	const handleClick = () => {
		setOpen(!open);
	};
	const closeDrawer = () => {
		dispatch(openCloseDrawer());
	};
	return (
		<List
			sx={{ width: "60%", minWidth: "280px", bgcolor: "background.paper" }}
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader
					component="div"
					id="nested-list-subheader"
					style={{ display: "flex", alignItems: "center" }}
				>
					<Avatar alt="Remy Sharp" style={{ marginLeft: "10px" }}>
						<PsychologyIcon
							sx={{
								fontSize: 40,
								color: "white",
								backgroundColor: "black",
							}}
						/>
					</Avatar>
					<h1
						style={{ marginLeft: "10px", marginTop: "15px", fontSize: "30px" }}
					>
						Tech Blog
					</h1>
				</ListSubheader>
			}
		>
			{" "}
			<Divider />
			<ListItemButton onClick={closeDrawer}>
				<ListItemIcon>
					<SendIcon style={{ color: "#8818F0" }} />
				</ListItemIcon>
				<ListItemText primary="Sent mail" />
			</ListItemButton>
			<ListItemButton onClick={closeDrawer}>
				<ListItemIcon>
					<DraftsIcon style={{ color: "#8818F0" }} />
				</ListItemIcon>
				<ListItemText primary="Drafts" />
			</ListItemButton>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<InboxIcon style={{ color: "#8818F0" }} />
				</ListItemIcon>
				<ListItemText primary="Inbox" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }} onClick={closeDrawer}>
						<ListItemIcon>
							<StarBorder style={{ color: "#8818F0" }} />
						</ListItemIcon>
						<ListItemText primary="Starred" />
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
}
