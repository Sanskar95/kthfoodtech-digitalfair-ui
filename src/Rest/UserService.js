import axios from 'axios'


export const changeUserPoints =(username, points)=>{
    const url = `https://kthfoodtech-digitalfair.herokuapp.com/user/change_points/${username}/${points}`;
    return axios.get(url);
}


export const getUserByUsername =(username) =>{
    const url = `https://kthfoodtech-digitalfair.herokuapp.com/user/${username}`;
    return axios.get(url)

}

export const createUser =(username, email)=>{
    const requestBody={
        username: username,
        email: email
    }
    const url = `https://kthfoodtech-digitalfair.herokuapp.com/user/create`
    return axios.post(url, requestBody)
}