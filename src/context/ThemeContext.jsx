import { createContext, useState, useContext, useEffect } from "react";
const ThemeContext = createContext()

export function ThemeProvider({children}){
        const [isDark, setIsDark] = useState(
            localStorage.getItem('isDark') === "true"
        )
    
        useEffect(() => {
            localStorage.setItem('isDark', JSON.stringify(isDark))
        },[isDark])

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return(
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useTheme = () => useContext(ThemeContext)