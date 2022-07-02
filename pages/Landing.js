
import Button from "@mui/material/Button";
import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "../styles/Landing.module.css";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// import headerVariants from "../variants"
import { motion } from "framer-motion";


const headerVariant ={
  initial:{
    y:-100,
    opacity:0
  },
  animate:{
      y:0,
      opacity:1,
      transition:{duration:1,ease:"easeInOut"}
  }
}
const fadeIn={
    initial:{
      x:-100,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{duration:0.7,ease:"easeIn"},
  }
}
const staggerContainer={
  initial:{},
  animate:{
    transition:{
      staggerChildren:0.5,
      delayChildren:0.7,
    }
  }
}
const cardVariants= {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
}
const Landing = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.front}>
          <motion.div className={styles.header} variants={headerVariant} initial="initial" animate="animate" >
            <h2>HexaOverflow</h2>
              <Link href="/Main/LoginSignup/login">
                <Button className={styles.loginBtn} variant="contained">
                  Login
                </Button>
              </Link>
          </motion.div>
          <motion.div className={styles.contentDiv} variants={staggerContainer} initial="initial" animate="animate">
          {/* <img className={styles.shape} src="../img/shape.png" alt="" /> */}

            <motion.h1 variants={fadeIn} className={styles.welcome}>Welcome to</motion.h1>
            <motion.h1 variants={fadeIn} className={styles.brandname}>HexaOverflow !!!</motion.h1>
            <motion.div variants={fadeIn} className={styles.para}>
              Feeling unheard? Well don’t be ,sociobook is here to make you
              reach like minded grandee and be a part of the change.
            </motion.div>
            <Link href="/Main/LoginSignup/login">
                <Button variants={fadeIn} className={styles.signupBtn} variant="contained">
                  Get started <ArrowForwardIosRoundedIcon/>
                </Button>
              </Link>
          </motion.div>
        </div>
        <motion.div className={styles.allcards}initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }} >
        <motion.div variants={cardVariants}>
          <Card sx={{ maxWidth: 250, maxHeight: 400 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </motion.div>
          <motion.div variants={cardVariants} >
          <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </motion.div>
          <motion.div variants={cardVariants} >
          <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
          <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </motion.div>
        </motion.div>
      </div>
    </>

import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import loginModule from "../styles/loginSignup/login.module.css";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Component from "./Components";
// import Theme from "./features/Theme";
import dynamic from "next/dynamic";
const Theme = dynamic(()=>import("./features/Theme"),{ssr:false})
const Landing = () => {
  const color=useSelector((state)=>state.theme.color)
  const secColor=useSelector((state)=>state.theme.secondaryColor)
  return (
    <div className={loginModule.mainDiv} >
      <div className={loginModule.inputs_login} style={{backgroundColor:color,color:secColor}}>
        <Box
          className={loginModule.box}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 350,
              height: 500,
            },
          }}
        >
          <Paper elevation={3} className={loginModule.paper} >
            <div className={loginModule.design} >
              <h1 className={loginModule.brandName} >
                HexaOverflow
              </h1>
              <h2>Welcome Back !!</h2>
              <Theme/>
              <p className={loginModule.logP}>Login to continue</p>
              <Box sx={{ "& > :not(style)": { m: 1.5 } }}>
                <Box sx={{ display: "block", alignItems: "flex-end" }}>
                  <AccountCircle sx={{ mr: 2, my: 2 }} />
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your email"
                    defaultValue=""
                    autoComplete="off"
                  />
                </Box>
                <Box sx={{ display: "block", alignItems: "flex-end" }}>
                  <LockIcon sx={{ mr: 2, my: 2 }} />
                  <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                </Box>
              </Box>
              <Button className={loginModule.loginBtn} variant="contained">
                LogIn
              </Button>
              <Button variant="text" className={loginModule.forgotBtn}>
                Forgot Password ?
              </Button>

              <div className={loginModule.socialAccouts}>
                <ul>
                  <li> Login with</li>
                  <li className={loginModule.google}>
                    <GoogleIcon />
                  </li>
                  <li className={loginModule.facebook}>
                    <FacebookIcon />
                  </li>
                  <li className={loginModule.insta}>
                    <InstagramIcon />
                  </li>
                </ul>
              </div>
            </div>
          </Paper>
        </Box>

        <Image
          src="/../public/images/img.png"
          alt="Picture of the author"
          width={600}
          height={300}
          className={loginModule.img}
        />
      </div>
    </div>

  );
};

export default Landing;
