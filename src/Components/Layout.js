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
              <img style={{ height: "4rem", maxWidth: '14rem' }} src={digFairLogo} />
            </Link>
          </Typography>
          {/* switch the places for text and burger */}

          {/* <Button
            style={{ margin: "auto" }}
            color="primary"
            onClick={handleClick}
            variant='contained'
          >
          Test
          </Button> */}
           {/* change the aname of noquo foods */}
           {/* put the schedule button either in header or make the button bigger , should be visible always irrespective of scrolling*/}
            {/* scaling the points by 10 for the quiz */}

          <Button
            style={{ margin: "auto", borderRadius: "30px" }}
            color="inherit"
            onClick={handleClick}
          >
           
           <p style={{color: 'red', fontSize: '3rem', fontFamily: 'monospace', marginLeft: '25px'}}>Click to Checkout!</p>
            
            <img style={{ height: "3rem", width: "3rem" }} src={burger} />
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
