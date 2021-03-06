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
import CodeCheckoutScreen from "./Screens/CodeCheckoutScreen";
import LinearProgress from "@material-ui/core/LinearProgress";

function App() {
  const [username, setUsername] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [isUserModalOpen, setIsUserModalOpen] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [points, updatePoints] = React.useState(0);
  const [showSpinner, setShowSpinner] = React.useState(false);
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      setIsUserModalOpen(true);
    } else {
      getUserByUsername(localStorage.getItem("username"))
        .then((response) => {
          setUser(response.data);

          updatePoints(response.data.points + response.data.snakePoints);
        })
        .catch(() => {
          setIsUserModalOpen(true);
        });
    }
  }, []);

  const handleGo = () => {
    setShowSpinner(true);
    getUserByUsername(username)
      .then((response) => {
        setIsUserModalOpen(false);
        localStorage.setItem("username", response.data.username);
        setShowSpinner(false);
        updatePoints(response.data.points + response.data.snakePoints);
      })
      .catch(() => {
        createUser(username, email).then((response) => {
          setIsUserModalOpen(false);
          localStorage.setItem("username", response.data.username);
          setShowSpinner(false);
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
        <ThemeContext.Provider value={{ points, increment }}>
          <Layout />
        </ThemeContext.Provider>
        <Route
          exact
          path="/"
          component={() => (
            <ThemeContext.Provider value={{ points, increment }}>
              <HomeScreen />{" "}
            </ThemeContext.Provider>
          )}
        />
        <Route
          exact
          path="/company/:companyName"
          component={() => (
            <ThemeContext.Provider value={{ points, increment }}>
              <CompanyScreen />{" "}
            </ThemeContext.Provider>
          )}
        />
        <Route exact path="/checkout" component={CodeCheckoutScreen} />
      </Router>

      <Dialog open={isUserModalOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Details!</DialogTitle>
        <DialogContent>
          {showSpinner && <LinearProgress />}
          <DialogContentText>
            Enter username so that we can identify you!
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
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button> */}
          <Button
            onClick={handleGo}
            color="primary"
            variant="outlined"
            disabled={
              username === null ||
              username === "" ||
              email === null ||
              email === ""
            }
          >
            GO!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default App;
