import React,{useContext} from 'react';
import { ThemeProvider } from './ThemeContext';



const Box = () => {
    const useColors = useContext(ThemeProvider)
  return (
    <div style={{background:useColors.secondary.main,color:useColors.primary.main}}>Box</div>
  )
}

export default Box