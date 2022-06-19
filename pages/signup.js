import React from "react";
import signUpModule from "../styles/loginSignup/signup.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

const Signup = () => {
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
              <h1 className={signUpModule.brandName}>SocioBook</h1>
              <h2>Let's get started !!</h2>
              <p className={signUpModule.signupPara}>
                Enter details to continue
              </p>

              <Box sx={{ "& > :not(style)": { m: 1.5 } }}>
                <div className={signUpModule.inputfield}>
                  <Box sx={{ display: "block", alignItems: "flex-end" }}>
                    <AccountCircle sx={{ mr: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter your name"
                      defaultValue=""
                      autoComplete="off"
                    />
                  </Box>
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
                  <Box sx={{ display: "block", alignItems: "flex-end" }}>
                    <LockIcon sx={{ mr: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Confirm password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </Box>
                </div>
                <Button className={signUpModule.signupBtn} variant="contained">
                  LogIn
                </Button>
              </Box>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
