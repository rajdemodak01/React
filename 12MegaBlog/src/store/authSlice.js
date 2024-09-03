import {createSlice} from '@reduxjs/toolkit';

//this file is created to track user authentications

const initialState={
    status:false,
    userData:null
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

export const {login,logout}=authSlice.actions;

export default authSlice.reducer;