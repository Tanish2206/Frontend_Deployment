
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const CartSlice = createSlice({
  name: "dajiUser",
  initialState: {
   
    userData: {},
   
    token: {},
    header: {},
  
    adminProfile: {
      data: [],
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
   
  },

  reducers: {
   
    add: (state, action) => {
      state.userData = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setHeaders: (state, action) => {
      state = { ...state, header: action.payload };
      return state;
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAdminProfile.pending, (state) => {
//         state.adminProfile.isLoading = true;
//       })
//       .addCase(getAdminProfile.fulfilled, (state, action) => {
//         state.adminProfile.isLoading = false;
//         state.adminProfile.isSuccess = true;
//         state.adminProfile.data = action.payload?.data;
//       })
//       .addCase(getAdminProfile.rejected, (state) => {
//         state.adminProfile.isLoading = false;
//         state.adminProfile.isError = true;
//       });
//   },
});
// export const getAdminProfile = createAsyncThunk(
//   "getAdmin",
//   async (_, { dispatch }) => {
//     return await ApiComponents.GetAdmin();
//   }
// );
export const {
 add
} = CartSlice.actions;
export default CartSlice.reducer;