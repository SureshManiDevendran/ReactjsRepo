import { useContext,createContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider

// Custom hooks
const useTheme=()=>{
     return useContext(ThemeContext)
}

export default useTheme