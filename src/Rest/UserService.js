import axios from 'axios'


export const changeUserPoints =(username, points)=>{
    const url = `https://kthfoodtech-digitalfair.herokuapp.com/user/change_points/${username}/${points}`;
    return axios.get(url);
}