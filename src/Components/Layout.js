import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from '../Images/logo.png'

const Layout = () => {
    return (
        <div>
            <AppBar position="sticky" style={{background: '#08e8de'}}>
                <Toolbar>
                    <Typography style={{ flexGrow: 1 }}>
                       <img style={{height: '5rem', width: '15rem'}} src={logo}/>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Layout;