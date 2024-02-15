import React, { createContext, FC, ReactNode, useState } from 'react'
import { View, Text } from 'react-native'


interface ColorsBG {
    primary : string,
    secundary : string
}
interface ContextState  {
    colors : ColorsBG,
    prevColors : ColorsBG,
    changeColors : (colors : ColorsBG) => void;
    changePrevColors : (colors : ColorsBG) => void
}

export const GradientContext = createContext({}  as ContextState)

type ContextProps = {
    children : ReactNode
}
const GradientProvider : FC<ContextProps>= ({children}) => {
    const [colors, setColors] = useState<ColorsBG>({
        primary : 'transparent',
        secundary : 'transparent'
    })

    const [prevColors, setPrevColors] = useState<ColorsBG>({
        primary : 'transparent',
        secundary : 'transparent'
    })
    const changeColors = (colors : ColorsBG)  => {
        setColors(colors)
    }
    const changePrevColors = (colors : ColorsBG) => {
        setPrevColors(colors)
    }
    return (
        <GradientContext.Provider value={{
          colors,
          prevColors,
          changeColors,
          changePrevColors
        }}>
            {children}
        </GradientContext.Provider>

    )}

export default GradientProvider