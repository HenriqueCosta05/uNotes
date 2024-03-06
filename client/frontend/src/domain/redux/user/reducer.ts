import axios from 'axios';
import UserActionTypes from './action-types';

const getUserInfo = () => {
    axios.get('http://localhost:8080/app/my-account', { withCredentials: true })
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
}
const initialState = {
    loggedIn: false,
    currentUser: {},
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                currentUser: getUserInfo(),
                loggedIn: true,
            };
        default: 
            return state;
    }
};