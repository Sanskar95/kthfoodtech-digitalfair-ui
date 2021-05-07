import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

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
      <AppBar position="sticky" style={{ background: "#ffffff" }}>
        <Toolbar>
          <Typography style={{ flexGrow: 1 }}>
            <Link to="/">
              <img style={{ height: "8rem", width: "15rem" }} src={logo} />
            </Link>
          </Typography>

          {/* <Button
            style={{ margin: "auto" }}
            color="primary"
            onClick={handleClick}
            variant='contained'
          >
          Test
          </Button> */}

          <Button
            style={{ margin: "auto", borderRadius: "30px" }}
            color="inherit"
            onClick={handleClick}
          >
           

            <p style={{ fontSize: "2rem", fontWeight: "40px", color: "black" }}>
              {points}
            </p>
            <img style={{ height: "3rem", width: "3rem" }} src={burger} />
          <p style={{color: 'red', fontSize: '1rem'}}>Click to Checkout!</p>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Layout;
