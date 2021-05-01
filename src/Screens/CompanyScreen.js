import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import CompanyDetailsArea from '../Components/CompanyDetailsArea';
import ThemeContext from '../Context/ThemeContext';


class CompanyScreen extends Component {
static contextType= ThemeContext
    componentDidMount(){
        console.log(this.context)
    }
    render() {
        return (
            <CompanyDetailsArea/>
        );
    }
}

export default CompanyScreen;