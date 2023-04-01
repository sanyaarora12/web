import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./style.scss";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = React.useState("");
  const [pass, setPass] = React.useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 10,
          width: "500px",
          height: "400px",
        },
      }}
    >
      <Paper elevation={10}>
        <div className="login-content">
          <u>
            <h3>Welcome to Imarticus Learning</h3>
          </u>
          <span>Please Login to proceed</span>
        </div>
        <br />
        <div className="credentials">
          <TextField
            id="outlined-password-input"
            label="Username"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="login-btn">
          <Button
            onClick={handleClick}
            variant="contained"
            disabled={login === "" || pass.length < 4}
          >
            Login
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
