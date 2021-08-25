const reducer = (state = null, action) => {
    switch(action.type){
        case "USER_LOGIN":
            return action.payload.token;
        case "USER_LOG_OUT":
            return null;
        case "TOKEN_PRES": 
            return action.payload;
        default: return state;
    }
}

export default reducer;