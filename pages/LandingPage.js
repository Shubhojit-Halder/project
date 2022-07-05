import Button from "@mui/material/Button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CardActionArea } from "@mui/material";
import styles from "../styles/Landing.module.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { motion } from "framer-motion";
import { headerVariant, fadeIn, staggerContainer, fadePara } from "../variants";
import img from "../public/images/picsart.png";
import securityImg from "../public/images/data-security-technology-background-vector-blue-tone_53876-112201.webp";
import friends from '../public/images/friends.jpg'
import Post from '../public/images/Post.jpg'
import Search from '../public/images/Search.jpg'
import Chat from '../public/images/Chat.jpg'
import User from '../public/images/User.jpg'
// const headerVariant = {
//   initial: {
//     y: -100,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 1, ease: "easeInOut" },
//   },
// };
// const fadeIn = {
//   initial: {
//     x: -100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.7, ease: "easeIn" },
//   },
// };
// const staggerContainer = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.5,
//       delayChildren: 0.7,
//     },
//   },
// };
// const fadePara = {
//   offscreen: {
//     y: 300,
//   },
//   onscreen: {
//     y: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 1,
//     },
//   },
// };
const LandingPage = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.front}>
          <motion.div
            className={styles.header}
            variants={headerVariant}
            initial="initial"
            animate="animate"
          >
            <h2>HexaOverflow</h2>
            <Link href="/Main/LoginSignup/login">
              <Button className={styles.loginBtn} variant="contained">
                Login
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className={styles.contentDiv}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* <img className={styles.shape} src="../img/shape.png" alt="" /> */}

            <motion.h1 variants={fadeIn} className={styles.welcome}>
              Welcome to
            </motion.h1>
            <motion.h1 variants={fadeIn} className={styles.brandname}>
              HexaOverflow !!!
            </motion.h1>
            <motion.div variants={fadeIn} className={styles.para}>
              Feeling unheard? Well don’t be ,sociobook is here to make you
              reach like minded grandee and be a part of the change.
            </motion.div>
            <Link href="/Main/LoginSignup/signup">
              <Button
                variants={fadeIn}
                className={styles.signupBtn}
                variant="contained"
              >
                Get started <ArrowForwardIosRoundedIcon />
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className={styles.portion}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
        >
          <Image
            src={img}
            alt="Picture of the author"
            width={600}
            height={300}
            className={styles.img}
            variants={fadeIn}
          />
          <motion.div className={styles.writeup} variants={fadePara}>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, at delectus soluta natus asperiores assumenda a esse
              fuga? Quam maiores aperiam molestiae possimus tenetur labore
              deleniti quod similique sint est?
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.allcards}
          variants={staggerContainer}
          viewport={{ amount: 0.8 }}
        >
          <motion.div
            className={styles.card_div}
            variants={fadePara}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Card sx={{ width: 250, height: 310, my: 1 }}>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={securityImg}
                    alt="Security image"
                    width="250"
                    height="180"
                  />
                </CardMedia>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Security
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    System designed to provide maximum guard and protection
                    against any sort of menace.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
          <motion.div
            className={styles.card_div}
            variants={fadePara}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Card sx={{ width: 250, height: 310, my: 1 }}>
              <CardActionArea>
                <CardMedia>
                <Image
                    src={friends}
                    alt="Follow your friends img"
                    width="250"
                    height="180"
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Follow your friends
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get connected with your pals and see what they're upto(Just
                    like the old day).
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
          <motion.div
            className={styles.card_div}
            variants={fadePara}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Card sx={{ width: 250, height: 310, my: 1 }}>
              <CardActionArea>
                <CardMedia>
                <Image
                    src={Post}
                    alt="Share posts img"
                    width="250"
                    height="180"
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Share posts
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Share what's on your mind and get every bit of appreciation
                    you deserve.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
          <motion.div
            className={styles.card_div}
            variants={fadePara}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Card sx={{ width: 250, height: 310, my: 1 }}>
              <CardActionArea>
                <CardMedia>
                <Image
                    src={Search}
                    alt="Search engine img"
                    width="250"
                    height="180"
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Search engine
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get the information you are looking for in just a click
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
          <motion.div
            className={styles.card_div}
            variants={fadePara}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Card sx={{ width: 250, height: 310, my: 1 }}>
              <CardActionArea>
              <CardMedia>
                <Image
                    src={Chat}
                    alt="chat img"
                    width="250"
                    height="180"
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Chat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Converse with your friends and like minded people and have a
                    rollicking time.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
          <motion.div
            className={styles.card_div}
            variants={fadePara}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Card sx={{ width: 250, height: 310, my: 1 }}>
              <CardActionArea>
              <CardMedia>
                  <Image
                    src={User}
                    alt="User image"
                    width="250"
                    height="180"
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    User friendly
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get the atmosphere that's quick to learn and easy to work
                    with
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
};
export default LandingPage;
