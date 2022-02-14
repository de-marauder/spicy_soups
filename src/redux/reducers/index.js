import { combineReducers } from "redux";

import {cartReducer} from './cartReducer'

const reducers = combineReducers({
    reducer: cartReducer
})

export default reducers;