import { CREATE,UPDATE } from "../constant/userActionTypes";
const user = (users=[],action) =>{

    switch(action.type){
        case CREATE:
            return [...users,action.payload]
        case UPDATE:
            return users.map((user) => (user._id === action.payload._id ? action.payload : user))
        default:
            return users
    }
}
export default user