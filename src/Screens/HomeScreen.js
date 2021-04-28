import React, { Component } from "react";
import CompanyCard from "../Components/CompanyCard";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { getUserByUsername } from "../Rest/UserService";
import { createUser } from "../Rest/UserService";
import {companyStuff} from "../Data/data";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserModalOpen: false,
      username: null,
      email: null,
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("username")) {
      this.setState({ isUserModalOpen: true });
    }
  }

  handleTextFieldChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleGo = () => {
    const { username, email } = this.state;
    getUserByUsername(username)
      .then((response) => {
        this.setState({ isUserModalOpen: false });
        localStorage.setItem("username", this.state.username);
      })
      .catch(() => {
        createUser(username, email).then(() => {
          this.setState({ isUserModalOpen: false });
          localStorage.setItem("username", this.state.username);
        });
      });
  };
  render() {
    return (
      <div style={{ margin: "7rem" }}>
        <Grid container spacing={3}>
          {companyStuff.map((company) => {
            return (
              <Grid item xs>
                <CompanyCard
                  {...company}
                />
              </Grid>
            );
          })}
        </Grid>

        <Dialog
          open={this.state.isUserModalOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Details!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter an username and email so that we can identify you!
            </DialogContentText>
            <TextField
              onChange={this.handleTextFieldChange}
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="name"
              fullWidth
              variant="outlined"
            />

            <TextField
              onChange={this.handleTextFieldChange}
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
            <Button onClick={this.handleGo} color="primary" variant="outlined">
              GO!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
