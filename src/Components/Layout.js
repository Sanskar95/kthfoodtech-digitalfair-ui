import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../Images/logo.png";
import digFairLogo from "../Images/dig_fair_logo.png";
import { Link } from "react-router-dom";
import burger from "../Images/burger.png";
import Button from "@material-ui/core/Button";
import ThemeContext from "../Context/ThemeContext";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Layout = (props) => {
  const { points, increment } = useContext(ThemeContext);
  const history = useHistory();
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const handleClick = () => history.push(`/checkout`);
  return (
    <div>
      <AppBar position="sticky" style={{ background: "#ffffff" }}>
        <Toolbar>
          {!isTabletOrMobileDevice &&
            <Typography style={{ flexGrow: 1 }}>
              <Link to="/">
                <img style={{ height: "9rem", maxWidth: "20rem" }} src={logo} />
              </Link>
            </Typography>
          }

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
          {/* insert the questions when done */}
          {!isTabletOrMobileDevice && (
            <Typography style={{ flexGrow: 1 }}>
              <Link to="/">
                <img
                  style={{ height: "4rem", maxWidth: "20rem" }}
                  src={digFairLogo}
                />
              </Link>
            </Typography>
          )}

          <Button
            style={{ margin: "auto", borderRadius: "30px" }}
            color="inherit"
            onClick={handleClick}
          >
            <p
              style={{
                color: "red",
                fontSize: "2rem",
                fontFamily: "monospace",
                marginLeft: "25px",
              }}
            >
              Click to Checkout!
            </p>

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
