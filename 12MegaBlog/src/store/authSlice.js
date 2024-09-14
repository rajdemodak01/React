import {createSlice} from '@reduxjs/toolkit';

//this file is created to track user authentications(user is logged in or not)

const initialState={
    status:false,//means user is not authenticated
    userData:null//no userdata now
};

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;//this means action.payload , as name of payload and data is same
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
});

export const {login,logout}=authSlice.actions;//authSlice.actions means the methods inside the reducers

export default authSlice.reducer;