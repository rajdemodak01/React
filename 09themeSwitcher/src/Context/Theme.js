import { createContext,useContext } from "react";
import React from "react";

export const ThemeContext=React.createContext(
    {
        themeMode:'light',
        //here we are declaring two functions darkTheme and lightTheme and will be defined in the App.jsx file
        darkTheme:()=>{},
        lightTheme:()=>{}
    }
)

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}