import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import verifyOTPReducer from "./verifyOTPReducer";
import authReducerOTP from "./authReducerOTP";


const reducers = {
    authReducer,
    authReducerOTP,
    verifyOTPReducer
};

export const rootReducer = combineReducers<typeof reducers>(reducers);