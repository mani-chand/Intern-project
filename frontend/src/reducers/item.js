import { FETCH } from "../constant/itemsActionTypes";
const item = (items=[],action)=>{
    switch (action.type){
        case FETCH:
//sort according to time
            return action.payload.sort(
  (objA, objB) => Number(objA.date) - Number(objB.date),
);
        default:
            return action.payload
    }

}
