import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ListForDrawer from "./ListForDrawer";
import { useSelector, useDispatch } from "react-redux";
import { openCloseDrawer } from "../Navbar/NavbarSlice";
const DrawerCom = (props) => {
	return (
		<div>
			<SwipeableDrawer open={props.open} onClose={() => {}}>
				<ListForDrawer />
			</SwipeableDrawer>
		</div>
	);
};

export default DrawerCom;
