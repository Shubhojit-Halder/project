import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import style from "../../../styles/Home/comments.module.css";
export default function AlignItemsList() {
	var s =
		"How are you lucciiiiiiiiii\nlllllllllllllllllllllllllllllllllllllllllllllllllllllllllll\nlllllllllllllllllllllllllllllllllllllllllllllllllliiiiiiiiiiiiii garment ggggggggggggggggggggggggggggggggg\ngggggggggggggggggggggggggggggggggg";
	const [more, setMore] = React.useState(false);
	return (
		<List
			sx={{ width: "95%", bgcolor: "background.paper", contain: "content" }}
		>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				</ListItemAvatar>
				<div>
					<span className={style.text}>{!more ? s.slice(0, 30) : s}</span>
					<br />
					<span
						style={{ fontWeight: "700", cursor: "pointer", fontSize: "12px" }}
						onClick={() => {
							setMore((pre) => !pre);
						}}
					>
						{!more ? " Show More..." : " Show Less"}
					</span>
				</div>
			</ListItem>
		</List>
	);
}
