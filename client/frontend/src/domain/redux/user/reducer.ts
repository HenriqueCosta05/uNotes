import axios from 'axios';
import UserActionTypes from './action-types';

const getUserInfo = () => {
    axios.get('http://localhost:8080/app/my-account')
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('User not found');
            }
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
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                currentUser: {},
                loggedIn: false,
            };
        default: 
            return state;
    }
};