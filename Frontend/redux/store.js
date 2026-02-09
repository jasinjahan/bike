// import {configureStore} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import bikeReducer from "./bikeSlice"
import userReducer from "./userSlice"



const store =configureStore({
    reducer:{
       
        bikeState : bikeReducer,
        userState : userReducer

    }
});

export default store ;