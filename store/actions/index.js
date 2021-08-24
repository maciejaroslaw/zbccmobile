export const login = (user, token) => {
    return (dispatch) => {
        console.log("AAA");
        dispatch({
            type: "USER_LOGIN",
            payload: {
                user: user,
                token: token,
            }
        })
    }
}