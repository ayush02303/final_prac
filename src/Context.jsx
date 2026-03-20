import React, { createContext } from 'react'

export const BioContext = createContext()

 export  const Context = ({children}) => {
    const name = "Ayush"
  return <BioContext.Provider value={ name }>
    {children}
  </BioContext.Provider>
}

export default Context
