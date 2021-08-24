
const reducer = (state = {user: {}, token: null}, action) => {
    switch(action.type){
        case "USER_LOGIN":
            console.log(action.payload);
            return {
                user: action.payload.user,
                token: action.payload.token,
            }
        default: return state;
    }
};

export default reducer;