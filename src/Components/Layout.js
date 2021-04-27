import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Layout = () => {
    return (
        <div>
            <AppBar position="sticky" style={{background: '#08e8de'}}>
                <Toolbar>
                    <Typography style={{ flexGrow: 1 }}>
                       <img style={{height: '10rem', width: '30rem'}} src="images/logo.png"/>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Layout;