import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from '../Images/logo.png'
import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <AppBar position="sticky" style={{background: '#08e8de'}}>
                <Toolbar>
                    <Typography style={{ flexGrow: 1 }}>
                        <Link to="/">
                        <img style={{height: '5rem', width: '15rem'}} src={logo}/>
                        </Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Layout;