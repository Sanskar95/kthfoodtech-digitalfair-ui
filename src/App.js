import "./App.css";
import React from "react";

import HomeScreen from "./Screens/HomeScreen";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompanyScreen from "./Screens/CompanyScreen";

function App() {
  return (
    <div className="App">
     

      <Router>
      <Layout />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/company/:companyName" component={CompanyScreen} />
      </Router>
    </div>
  );
}
export default App;
