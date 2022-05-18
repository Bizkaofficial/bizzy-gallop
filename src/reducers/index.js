import { combineReducers } from "redux";
import accounts from "./accounts";

const allReducers = combineReducers({
    accountsReducer: accounts
})

export default allReducers;