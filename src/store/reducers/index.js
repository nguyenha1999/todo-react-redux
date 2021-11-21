import { combineReducers } from "redux";
import todo from './Todo';
import word from './Word';
import other from './Other'

const rootReducer = combineReducers({
    todo,
    word,
    other
})

export default rootReducer