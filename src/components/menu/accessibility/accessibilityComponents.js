
import React from 'react'
import * as Styled from './accessibilityStyle' 
import * as GlobalStyled from '../../style' 
import {theme} from '../../../components/theme'
import * as Storage from '../../../components/storage/index'
import { useDispatch, useSelector } from "react-redux";
import {REDUX_UPDATE_THEME} from '../../../action-reducers/index';

const paddingTopStyle = {
   paddingTop: '4px' ,
   paddingBottom: '4px' 
}
const contrastStyle = {
  position: 'absolute',
  backgroundImage: `url(${ theme.icones.contrast })`,
  backgroundRepeat  : 'no-repeat',
  height: '14px',
  width:'14px',
  top: '5px'
} 
const menuacessibilidade = {
  position: 'absolute',
  backgroundImage: `url(${ theme.icones.menuacessibilidade })`,
  backgroundRepeat  : 'no-repeat',
  height: '16px',
  width:'43px',
  left: '65px'
}


export default function AccessibilityMenu(props) {

  const dispatch = useDispatch();
  const max = 3;

  const getTheme =()=>{ 
    dispatch(REDUX_UPDATE_THEME(true)) 
  }
  const handleTypeColor = () => {
     
    var contrast = Storage.recuperarItem(Storage.constrast);
    Storage.armazenarItem(Storage.constrast,!contrast);
    getTheme();
    
  }

  const handleFontSize = () => {
    //debugger
    var fontSize = Storage.recuperarItem(Storage.fontSize);
    var somar = (fontSize <3);
    
    if(somar && fontSize <max){
      Storage.armazenarItem(Storage.fontSize,fontSize+1);
    }else if(!somar && fontSize > 1){
      Storage.armazenarItem(Storage.fontSize,1);
    } 
    
    getTheme();
  }

  return ( 
   
         <Styled.accessibility aria-label="Menu de Acessibilidade">
            <GlobalStyled.PaddingLeftRightDefault  style={paddingTopStyle}> 
                    <div tabIndex="1" role="button" onClick={handleTypeColor} style={contrastStyle} aria-label="Alterar Contraste"></div>
                    <div tabIndex="2" role="button" onClick={handleFontSize} style={menuacessibilidade} aria-label="Aumentar ou Diminuir Fonte"></div>
             </GlobalStyled.PaddingLeftRightDefault> 
        </Styled.accessibility>
  )
}
