// import { Switch } from "react-router";

const initState = {
    users: [
        {id: 1, name: 'Thanh Tung'},
        {id: 2, name: 'Nguyen Tung'},
    ]
}
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };

            // break;
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1001)
            let user = {
                id: id,
                name: `random - ${id}`
            }
            return{
                ...state, users: [...state.users, user]
            }
        default: 
            return state;
    }
}
export default rootReducer;