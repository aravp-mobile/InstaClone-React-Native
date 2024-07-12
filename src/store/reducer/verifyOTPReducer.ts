import {createSlice} from '@reduxjs/toolkit';
import {verifyOTP} from '../../services/apiService';

// Define an initial state using a type
interface AuthState {
  loading: boolean;
  data: any; // We can replace 'any' with a specific type if you know the shape of data.
  error: string | null;
}

// Define initial state of response here ..
const initialState: AuthState = {
  loading: false,
  data: null,
  error: null,
};

const verifyOTPSlice = createSlice({
  name: 'auth/verify-otp',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(verifyOTP.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default verifyOTPSlice.reducer;
