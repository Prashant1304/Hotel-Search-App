import {combineReducers} from "redux";
import ascendingReducer from "./ascendingReducer"
import descendingReducer from "./descendingReducer"
import searchReducer from "./searchReducer"
import apiReducer from "./apiReducer"
let rootReducer = combineReducers({
    ascending:ascendingReducer,
    descending:descendingReducer,
    search:searchReducer,
    apiData:apiReducer
})

export default rootReducer