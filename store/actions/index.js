import * as SecureStore from 'expo-secure-store';

export const login = (user, token) => {
    SecureStore.setItemAsync("token", token);
    return (dispatch) => {
        dispatch({
            type: "USER_LOGIN",
            payload: {
                user: user,
                token: token,
            }
        })
    }
};
export const saveToken = (token) => {
    return (dispatch) => {
        dispatch({
            type: "TOKEN_PRES",
            payload: token,
        })
    }
};
export const logout = () =>{
    SecureStore.deleteItemAsync("token");  
    return (dispatch) => {
        dispatch({
            type: "USER_LOG_OUT",
        })
    }
}