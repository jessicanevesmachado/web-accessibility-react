import React, { useState } from 'react'
import {getThemeColor,getFontSize, theme} from '../theme'
import {ThemeProvider} from "styled-components"
import Routes from '../../route'; 
import { useSelector } from 'react-redux'

export default function ThemeComponents(){

        const UpdateTheme = useSelector(state => state.UpdateTheme);
         

        function getTheme(){
                
                var newtheme = theme;
                newtheme.color = getThemeColor();
                newtheme.fontSizeTitulo = getFontSize(true);
                newtheme.fontSizeConteudo = getFontSize(false);
                
                return newtheme
        }


        return (
                <>
                <ThemeProvider theme={getTheme()}>
                        <Routes></Routes>  
                </ThemeProvider>
              </>
    ) 
}
 