const reducer = (state = {}, action) => {
    switch(action.type){
        case "USER_LOGIN":
            console.log(action.payload);
            return action.payload.user;
        case "USER_LOG_OUT":
            return {};
        default: return state;
    }
};

export default reducer;