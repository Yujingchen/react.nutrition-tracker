import { combineReducers } from "redux";
import dietReducer from "./dietReducer"
export default combineReducers({
    diets: dietReducer
});