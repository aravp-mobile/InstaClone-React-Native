import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Place your base URL here ....
const baseURL = 'https://gurushalanewstg.appinventive.com/api/v1';

// Auth Login with password
export const authLogin = createAsyncThunk(
  'auth/login',
  async (
    {mobile, password}: {mobile: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const url = `${baseURL}/auth/login?mobile=${mobile}&password=${password}`;
      console.log(`URL: ${url}`); // Log the URL

      const response = await axios.post(url);

      console.log('RESPONSE : ===>', response.data);

      return response.data;
    } catch (error: any) {
      console.log('ERROR: ====>', error.response.data || error.message);
      return rejectWithValue(error.message);
    }
  },
);

// Auth Login via OTP
export const authLoginWithOTP = createAsyncThunk(
  'auth/login-otp',
  async (
    {mobile} : {mobile: string}, {rejectWithValue}) => {
    try {
      const url = `${baseURL}/auth/login?mobile=${mobile}&via=otp`;
      console.log(`URL: ${url}`); // Log the URL

      const response = await axios.post(url);

      console.log('RESPONSE : ===>', response.data);

      return response.data;
    } catch (error: any) {
      console.log('ERROR: ====>', error.response.data);
      return rejectWithValue(error.message);
    }
  },
);

export const verifyOTP = createAsyncThunk(
  'auth/verify-otp',
  async (
    {otpID, otp, otpFor}: {otpID: string; otp: string; otpFor: string},
    {rejectWithValue},
  ) => {
    console.log('OTP-ID', otpID, 'OTP-FOR', otpFor);
    try {
      const url = `${baseURL}/auth/verify-otp?otp_id=${otpID}&otp=${otp}&for=${otpFor}`;
      const response = await axios.post(url);
      console.log(url);

      console.log('RESPONSE:=====>', response.data);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
