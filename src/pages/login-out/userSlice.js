import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
  },
  reducers: {
    setUser:(state, action) => {
      const {uid, displayName, email} = action.payload
      state.currentUser = {displayName: displayName, uid:uid, email:email}
    }, 
    logOut:(state)=>{
      state.currentUser = null
    }
  },
});

//we can make a thunk to handle the login or we can dispatch from
//the component a state when successfully logged in
//The errorr messages will be handles in the internal state of
// the login and sign out component

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
