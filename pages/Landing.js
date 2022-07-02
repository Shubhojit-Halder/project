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
  );
};

export default Landing;
