import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { applyCode } from "../Rest/UserService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Markdown from "markdown-to-jsx";


import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
toast.configure();

const markdown = `If you have the code from the webinars or panel discussion, please type that code in the box.We won't sell or share your information with any third party, unless you opt in.

                            Your email will only be used for this competition, and then deleted afterwards.`;

const styles = () => ({
  textField: {
    marginTop: "1rem",
  },
});

class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null,
      email: null,
    };
  }

  handleTextFieldChange = (event) => {
    console.log(event.target.id);
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = () => {
    const { code, email } = this.state;
    applyCode(localStorage.getItem("username"), email, code)
      .then(() => {
        toast.success("Code Applied SuccessFully");
        window.location.reload();
      })
      .catch(() => {
        toast.error("Invalid Code!");
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography style={{fontSize: '3rem', fontWeight: '800',textAlign: 'center', color: 'green'}}>Checkout!</Typography>
        <Markdown
          style={{
            width: "80%",
            fontSize: "25px",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          children={markdown}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <form>
            <TextField
              className={classes.textField}
              fullWidth={true}
              id="code"
              label="Code"
              variant="outlined"
              onChange={this.handleTextFieldChange}
            />
            <TextField
              className={classes.textField}
              fullWidth={true}
              id="email"
              label="Email"
              variant="outlined"
              onChange={this.handleTextFieldChange}
            />

            <Button
              style={{
                borderRadius: "30px",
                marginTop: "1rem",
                fontSize: "20px",
              }}
              disabled={!(this.state.email && this.state.code)}
              variant="contained"
              color="secondary"
              onClick={this.handleSubmit}
            >
              Submit!
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CheckoutScreen);
