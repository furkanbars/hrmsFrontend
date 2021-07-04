//tüm stateleri topladığımız yer

import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
    favorites : favoriteReducer
})

export default rootReducer;