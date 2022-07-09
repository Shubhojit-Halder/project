import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from '../../../styles/FriendsAllCss/NavDivFriends.module.css';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
const NavDivFriendsAll = () => {
  return (
      <Grid container spacing={1} className={styles.main}>
        <Grid item xs={12} >
            <div className={styles.heading}>
                <h2>Friends</h2>
            </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.NavItems}>
          <span className={styles.icons}><PersonAddOutlinedIcon/></span>
            <span className={styles.item}>Friend Requests</span>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.NavItems}>
          <span className={styles.icons}><GroupAddOutlinedIcon/></span>
            <span className={styles.item}>Suggestions</span>
          </div>
        </Grid>
        <Grid item xs={12} >
          <div className={styles.NavItems}>
            <span className={styles.icons}><PeopleOutlineOutlinedIcon/></span>
            <span className={styles.item}>All Friends</span>
          </div>
        </Grid>
      </Grid>
  );
}
export default NavDivFriendsAll