import React, { createContext, useContext, useState } from 'react'

export const ThemeContext  = createContext()

export const DarkLightModeSwitch = ({ children}) => {

    const [ theme , setTheme ] = useState('light')

    function handleToggleTheme(){
        setTheme( prev => prev === "dark" ? "light" : "dark")
    }
  return <ThemeContext.Provider value={{theme , handleToggleTheme}}>
    {children}
  </ThemeContext.Provider>
}

export const  DarkLight = ()=>{ 

    const { theme , handleToggleTheme} = useContext(ThemeContext)
    return <>
    <h1>Light/Dark mode switch </h1>
    <button onClick={ handleToggleTheme }>{ theme === "dark" ? "Switch to Light mode" : "switch to Dark mode"}</button>

    </>

}

export default DarkLightModeSwitch
