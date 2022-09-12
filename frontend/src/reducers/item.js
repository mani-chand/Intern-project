import { FETCH } from "../constant/itemsActionTypes";
const item = (items=[],action)=>{
    switch (action.type){
        case FETCH:
            return action.payload
        default:
            return action.payload
    }

}