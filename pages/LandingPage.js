import Button from "@mui/material/Button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CardActionArea } from "@mui/material";
import styles from "../styles/Landing.module.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { motion } from "framer-motion";
import { headerVariant,fadeIn,staggerContainer,fadePara } from "../variants";
import img from "../public/images/picsart.png"
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
        <motion.div className={styles.portion} initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, at delectus soluta natus asperiores assumenda a esse fuga? Quam maiores aperiam molestiae possimus tenetur labore deleniti quod similique sint est?</p>
        </motion.div>
        </motion.div>
        <motion.div
          className={styles.allcards}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
        >
          <motion.div className={styles.card_div} variants={fadePara}>
            <Card sx={{ maxWidth: 250, maxHeight: 380,my:1}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
          <motion.div className={styles.card_div} variants={fadePara}>
            <Card sx={{ maxWidth: 250, maxHeight: 380,my:1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
          <motion.div className={styles.card_div} variants={fadePara}>
            <Card sx={{ maxWidth: 250, maxHeight: 380,my:1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
          <motion.div className={styles.card_div} variants={fadePara}>
            <Card sx={{ maxWidth: 250, maxHeight: 380,my:1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </motion.div>
        <div className={styles.footer}>
          <p>Created with <FavoriteBorderIcon/> by</p>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
