import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducer/music";


const theOnesReducer = combineReducers({
    music: musicReducer
})

const store = configureStore({
    reducer : theOnesReducer
})

export default store