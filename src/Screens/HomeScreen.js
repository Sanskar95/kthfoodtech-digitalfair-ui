import React, { Component } from "react";
import CompanyCard from "../Components/CompanyCard";
import Grid from "@material-ui/core/Grid";
import { companyStuff } from "../Data/data";
import { BottomNavigation } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import test from "../Images/swegreen-header.jpg"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


// const PointsContext = React.createContext(0);

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserModalOpen: false,
      username: null,
      email: null,
      user: {},
      scheduleOpen: false
    };
  }

  handleScheduleOpen=()=>{
    this.setState({scheduleOpen: true})
  }

  handleScheduleClose=()=>{
    this.setState({scheduleOpen: false})
  }

  render() {
    const {scheduleOpen}= this.state
    return (
      <div>
        <div style={{textAlign: 'center'}}>
        <Button onClick={this.handleScheduleOpen} size="small" color="secondary" variant="outlined" style={{margin: '1rem'}}>
          Click here for schedule!
        </Button>
        </div>

      
      <Grid
        container
        spacing={2}
        style={{ justifyContent: "center", marginTop: "2rem" }}
      >
        {companyStuff.map((company) => {
          return <CompanyCard {...company} />;
        })}
      </Grid>

      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={scheduleOpen}
        onClose={this.handleScheduleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
        <DialogContent>
         <img src={test}/>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleScheduleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>


      </div>
    );
  }
}
