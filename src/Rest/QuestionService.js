import axios from 'axios'


export const getCompanyQuestions = (company) => {
    const url = `https://kthfoodtech-digitalfair.herokuapp.com/question/${company}`;
    return axios.get(url);
};