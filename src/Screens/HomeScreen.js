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
import { companyStuff } from "../Data/data";

// const PointsContext = React.createContext(0);

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserModalOpen: false,
      username: null,
      email: null,
      user: {},
    };
  }

  // componentDidMount() {
  //   if (!localStorage.getItem("username")) {
  //     this.setState({ isUserModalOpen: true });
  //   } else {
  //     getUserByUsername(
  //       localStorage.getItem("username")
  //     ).then((response) => { this.setState({user:response.data})});
  //   }
  // }

  // handleTextFieldChange = (event) => {
  //   this.setState({ [event.target.id]: event.target.value });
  // };

  // handleGo = () => {
  //   const { username, email } = this.state;
  //   getUserByUsername(username)
  //     .then((response) => {
  //       this.setState({ isUserModalOpen: false });
  //       localStorage.setItem("username", this.state.username);
  //     })
  //     .catch(() => {
  //       createUser(username, email).then(() => {
  //         this.setState({ isUserModalOpen: false });
  //         localStorage.setItem("username", this.state.username);
  //       });
  //     });
  // };
  render() {
    const { user } = this.state;
    return (
    
       

       
          <Grid container spacing={2} style={{justifyContent: 'center', marginTop: '2rem'}} >
            {companyStuff.map((company) => {
              return (
              
                  <CompanyCard {...company} />
                
               
              );
            })}
          </Grid>

          
       
   
    );
  }
}
