import { CombinedState, combineReducers } from "redux";

import countReducer from "./counterReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
    user:countReducer,
    accountThanh:userReducer
})

export default rootReducer