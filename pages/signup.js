import React from "react";
import signUpModule from "../styles/loginSignup/signup.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import WcIcon from "@mui/icons-material/Wc";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Signup = () => {
  const [sex, setSex] = React.useState("");

  const handleChange = (event) => {
    setSex(event.target.value);
  };
  return (
    <div className={signUpModule.mainDiv}>
      <div className={signUpModule.inputs_login}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 600,
              height: 530,
            },
          }}
        >
          <Paper elevation={3}>
            <div className={signUpModule.design}>
              <h1 className={signUpModule.brandName}>HexaOverflow</h1>
              <h2>Let's get started !!</h2>
              <p className={signUpModule.signupPara}>
                Enter details to continue
              </p>

              <Box sx={{ "& > :not(style)": { m: 2 } }}>
                <div className={signUpModule.inputfield}>
                  <Box sx={{ display: "inline-block", alignItems: "flex-end" }}>
                    <AccountCircle sx={{ mr: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter your name"
                      defaultValue=""
                      autoComplete="off"
                    />
                  </Box>
                  <Box sx={{ display: "inline-block", alignItems: "flex-end",my:2 }}>
                    <AccountCircle sx={{ mr: 2, ml: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter your email"
                      defaultValue=""
                      autoComplete="off"
                    />
                  </Box>
                  <Box
                    className={signUpModule.box}
                    sx={{ display: "inline-block", alignItems: "flex-end" }}
                  >
                    <LockIcon sx={{ mr: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "inline-block",
                      alignItems: "flex-end",
                      mr: 2,
                      my: 2,
                    }}
                  >
                    <LockIcon sx={{ mr: 2, ml: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Confirm password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "inline-block",
                      alignItems: "flex-end",
                      mr: 2,
                      my: 2,
                    }}
                  >
                    <LockIcon sx={{ mr: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-mobile-input"
                      label="Mobile No."
                      type="password"
                      autoComplete="off"
                    />
                  </Box>
                  <Box sx={{ mr: 2, display: "inline-block" }}>
                    <WcIcon sx={{ mr: 2, my: 2 }} />
                    <FormControl sx={{ minWidth: 222 }}>
                      <InputLabel id="demo-simple-select-label">Gender *</InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sex}
                        label="sex"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Others"}>Others</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className={signUpModule.signupBtnDiv}>
                <a href="./signup2">
                  <Button
                    className={signUpModule.signupBtn}
                    variant="contained"
                  >
                   Next <ArrowForwardIosRoundedIcon/>
                  </Button>
                  </a>
                </div>
              </Box>
            </div>
          </Paper>
        </Box>
        <div className={signUpModule.sidePara}>
          <h1>Discover a new world with us.</h1>
          <p>We're here to give you a better social media experience where you can learn and grow without losing a single bit of fun.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
