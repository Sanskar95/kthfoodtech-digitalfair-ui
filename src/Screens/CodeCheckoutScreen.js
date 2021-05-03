import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

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

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
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
              fontSize: "25px",
            }}
            variant="contained"
            color="secondary"
            onClick={this.handleCreate}
          >
            Submit!
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CheckoutScreen);
