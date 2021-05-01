import "./App.css";
import React from "react";

import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompanyScreen from "./Screens/CompanyScreen";
import Layout from "./Components/Layout";
import ThemeContext from "./Context/ThemeContext";
import { useEffect } from "react";
import { getUserByUsername } from "./Rest/UserService";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { createUser } from "./Rest/UserService";

function App() {
  const [username, setUsername] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [isUserModalOpen, setIsUserModalOpen] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [points, updatePoints] = React.useState(0);

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      setIsUserModalOpen(true);
    } else {
      getUserByUsername(localStorage.getItem("username")).then((response) => {
        setUser(response.data);
        updatePoints(response.data.points);
      });
    }
  }, []);

  const handleGo = () => {
    getUserByUsername(username)
      .then((response) => {
        setIsUserModalOpen(false);
        localStorage.setItem("username", response.data.username);
      })
      .catch(() => {
        createUser(username, email).then((response) => {
          setIsUserModalOpen(false);
          localStorage.setItem("username", response.data.username);
        });
      });
  };

  const handleUsernameTextFieldChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailTextFieldChange = (event) => {
    setEmail(event.target.value);
  };

  function increment(delta) {
    updatePoints(points + delta);
  }

  return (
    <div className="App">
      <Router>
        <ThemeContext.Provider value={{points, increment}}>
          <Layout />
        </ThemeContext.Provider>
        <Route
          exact
          path="/"
          component={() => (
            <ThemeContext.Provider value={{points, increment}}>
              <HomeScreen />{" "}
            </ThemeContext.Provider>
          )}
        />
        <Route
          exact
          path="/company/:companyName"
          component={() => (
            <ThemeContext.Provider value={{points, increment}}>
              <CompanyScreen />{" "}
            </ThemeContext.Provider>
          )}
        />
      </Router>

      <Dialog open={isUserModalOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Details!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter username and email so that we can identify you!
          </DialogContentText>
          <TextField
            onChange={handleUsernameTextFieldChange}
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="name"
            fullWidth
            variant="outlined"
          />

          <TextField
            onChange={handleEmailTextFieldChange}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button> */}
          <Button onClick={handleGo} color="primary" variant="outlined">
            GO!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default App;
