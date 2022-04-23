import { combineReducers } from "redux";
import users from "./users";

const allReducers = combineReducers({
    usersReducer: users
})

export default allReducers;