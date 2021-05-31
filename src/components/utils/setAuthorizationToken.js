import axios from 'axios';

export default function setAuthorizationToken(token){
    if(token){
        console.log("HERE");
        axios.defaults.headers.common['Authorization'] = token;
    }else{
        delete axios.headers.common['Authorization'];
    }
}