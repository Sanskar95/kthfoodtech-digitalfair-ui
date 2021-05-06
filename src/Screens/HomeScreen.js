import React, { Component } from "react";
import CompanyCard from "../Components/CompanyCard";
import Grid from "@material-ui/core/Grid";
import { companyStuff } from "../Data/data";
import { BottomNavigation } from "@material-ui/core";

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

  render() {
    return (
      <Grid
        container
        spacing={2}
        style={{ justifyContent: "center", marginTop: "2rem" }}
      >
        {companyStuff.map((company) => {
          return <CompanyCard {...company} />;
        })}
      </Grid>
    );
  }
}
