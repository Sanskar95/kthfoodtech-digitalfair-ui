import React, { Component } from "react";
import CompanyCard from "../Components/CompanyCard";
import Grid from "@material-ui/core/Grid";


export default class HomeScreen extends Component {
  render() {
    return (
      <div style={{margin: '7rem'}}>
        <Grid container spacing={3}>
        <Grid item xs>
          <CompanyCard imagePath="images/sweden-foodtech.png" companyName="Sweden Foodtech"/>
        </Grid>
        <Grid item xs>
          <CompanyCard imagePath="images/klimato.jpg" companyName="Klimato"/>
        </Grid>
        <Grid item xs>
          <CompanyCard imagePath="images/swegreen-large.png" companyName="Swegreen" />
        </Grid>
        
      </Grid>
      </div>
    );
  }
}