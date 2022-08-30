import React,{createContext} from 'react'
import { theme } from './Theme'

type themeProvType = {
    children:React.ReactNode
}
export const ThemeProvider = createContext(theme)
const ThemeContextProvider = ({children}:themeProvType) => {
    
  return (
    <ThemeProvider.Provider value={theme}>
        {children}
    </ThemeProvider.Provider>
  )
}

export default ThemeContextProvider