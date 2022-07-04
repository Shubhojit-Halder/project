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
import GroupsIcon from "@mui/icons-material/Groups";
import FlagIcon from "@mui/icons-material/Flag";
import EventIcon from "@mui/icons-material/Event";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ImageIcon from "@mui/icons-material/Image";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ToysIcon from "@mui/icons-material/Toys";
import ForumIcon from "@mui/icons-material/Forum";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TagIcon from "@mui/icons-material/Tag";
import {
	FcDocument,
	FcAdvertising,
	FcBookmark,
	FcSms,
	FcPuzzle,
} from "react-icons/fc";
export default function NestedList() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					<ListItem>
						<ListItemAvatar>
							<Avatar
								style={{
									background: "rgb(2,0,36)",
									background:
										"linear-gradient(90deg, rgba(19,6,232,1) 0%, rgba(137,20,255,1) 35%, rgba(0,212,255,1) 100%)",
								}}
							>
								<MenuBookIcon color="white" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Menu Book" secondary="Jan 9, 2014" />
					</ListItem>
				</ListSubheader>
			}
		>
			<ListItemButton>
				<ListItemIcon>
					<GroupsIcon color="primary" />
				</ListItemIcon>
				<ListItemText primary="Groups" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<FcDocument size={25} />
				</ListItemIcon>
				<ListItemText primary="Pages" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<FcAdvertising size={25} />
				</ListItemIcon>
				<ListItemText primary="Events" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<GroupAddIcon color="secondary" />
				</ListItemIcon>
				<ListItemText primary="Followed" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<FcBookmark size={25} />
				</ListItemIcon>
				<ListItemText primary="Bookmarks" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<PeopleIcon color="primary" />
				</ListItemIcon>
				<ListItemText primary="People I Follow" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<SettingsIcon />
				</ListItemIcon>
				<ListItemText primary="Settings" />
			</ListItemButton>

			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<MoreHorizIcon color="primary" />
				</ListItemIcon>
				<ListItemText primary="More" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<FcSms size={25} />
						</ListItemIcon>
						<ListItemText primary="Let's Talk" />
					</ListItemButton>
				</List>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<FcPuzzle size={25} />
						</ListItemIcon>
						<ListItemText primary="Games" />
					</ListItemButton>
				</List>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<TagIcon />
						</ListItemIcon>
						<ListItemText primary="Followed HashTags" />
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
}
