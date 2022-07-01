import React from "react";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "next/link";
import styles from "../../../styles/loginSignup/otppage.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";


const Signup2 = () => {
  const [sex, setSex] = React.useState("");

  const handleChange = (event) => {
    setSex(event.target.value);
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.inputs_login}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              // width: 600,
              // height: 530,
            },
          }}
        >
          <Paper elevation={3} className={styles.input_box_container}>
            <div className={styles.design}>
              <h1 className={styles.brandName}>HexaOverflow</h1>
              <h2>Let's get started !!</h2>
              <p className={styles.signupPara}>
                Enter details to continue
              </p>

              <Box sx={{ "& > :not(style)": { m: 2 } }}>
                <div className={styles.inputfield}>
                  <Box
                    sx={{
                      display: "inline-block",
                      alignItems: "flex-end",
                      ml: 2,
                    }}
                  >
                    <LocationCityRoundedIcon sx={{ mr: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter your OTP"
                      defaultValue=""
                      autoComplete="off"
                    />
                  </Box>
                </div>
                <div className={styles.signupBtnDiv}>
                <Button
                      className={styles.sendOTPBTN}
                    >
                      Send OTP
                    </Button>
                  <Link href={"/"}>
                    <Button
                      className={styles.signupBtn}
                      variant="contained"
                    >
                      Signup<ArrowForwardIosRoundedIcon />
                    </Button>
                  </Link>
                </div>
              </Box>
            </div>
          </Paper>
        </Box>
        <div className={styles.sidePara}>
          <h1>Discover a new world with us.</h1>
          <p>
            We're here to give you a better social media experience where you
            can learn and grow without losing a single bit of fun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
