import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../Images/logo.png";
import digFairLogo from "../Images/dig_fair_logo.png"
import { Link } from "react-router-dom";
import burger from "../Images/burger.png";
import Button from "@material-ui/core/Button";
import ThemeContext from "../Context/ThemeContext";
import { useHistory } from 'react-router-dom';


const Layout = (props) => {
  const { points, increment } = useContext(ThemeContext);
  const history = useHistory();
  const handleClick = () => history.push(`/checkout`);
  return (
    <div>
      <AppBar position="sticky" style={{ background: "#08e8de" }}>
        <Toolbar>
          <Typography style={{ flexGrow: 1 }}>
            <Link to="/">
              <img style={{ height: "8rem", width: "15rem" }} src={logo} />
            </Link>
          </Typography>
          <Typography >
            <Link to="/">
              <img style={{ height: "4rem", width: "15%" }} src={digFairLogo} />
            </Link>
          </Typography>
          <Button
            style={{ margin: "auto", borderRadius: "30px" }}
            color="inherit"
            onClick={handleClick}
          >
            <img style={{ height: "5rem", width: "5rem" }} src={burger} />

            <p style={{ fontSize: "2rem", fontWeight: "40px", color: "black" }}>
              {points}
            </p>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Layout;
