import React, { useState } from 'react'

const ThemeContextProvider = ({children}) => {
    const [dark, setDark]= useState(null);
  return (
    <>
    {children}
    </>
  )
}

export default ThemeContextProvider;