import React, {useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import burger from "../Images/burger.png";
import Button from "@material-ui/core/Button";
import ThemeContext from "../Context/ThemeContext";

const Layout = (props) => {

  const {points, increment} = useContext(ThemeContext);
  return (
    <div>
    <AppBar position="sticky" style={{ background: "#08e8de" }}>
            <Toolbar>
              <Typography style={{ flexGrow: 1 }}>
                <Link to="/">
                  <img style={{ height: "5rem", width: "15rem" }} src={logo} />
                </Link>
              </Typography>
              <Button
                style={{ margin: "auto", borderRadius: "30px" }}
                color="inherit"
              >
                
                <img style={{ height: "5rem", width: "5rem" }} src={burger} />
                
                <p style={{ fontSize: "2rem", fontWeight: "40px", color: 'black' }}>
                  {points} 
                </p>
                
               
              </Button>
            </Toolbar>
          </AppBar>
          </div>
  );
};

export default Layout;
