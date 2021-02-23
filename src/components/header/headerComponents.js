import React, {useEffect} from "react";
import * as Styled from "../style"; 
import {theme} from "../theme"; 
import AccessibilityMenu from "../menu/accessibility/accessibilityComponents";
import HamburguerComponent from "../menu/hamburguer/hamburguerComponents";

const paddingTopStyle = {
    paddingTop: '12px' ,
    paddingBottom: '12px',
    color: 'white',
 }

 const logo = {
   position: 'absolute',
   right: '2px',
   top: '9px'
 }

 

function HeaderComponents() { 

  
 const [focus, setFocus] = React.useState(false);
 const [analytics, setAnalytics] = React.useState(false);

  function handleInputFocus(){
     //debugger
     var newFocus =!focus;
      setFocus(newFocus);
      
    };


 
    
  return (
     
        <Styled.Header aria-label="Cabeçalho da Pagina" >
               <Styled.SkipNavigation onFocus={handleInputFocus} href="#title">Ir para o conteúdo principal</Styled.SkipNavigation>
                <AccessibilityMenu ></AccessibilityMenu>
                <Styled.PaddingLeftRightDefault  style={paddingTopStyle}>
                   <Styled.Left style={{paddingTop:'5px'}} > <HamburguerComponent/></Styled.Left>
                   <Styled.Right style={{position:'relative'}}>
                      <img aria-label="Logo da Jay Jay " style={logo} tabIndex="9" alt="Logo da Jay Jay  "  src={theme.icones.anforaHeader} />
                   </Styled.Right>
                   <Styled.Clear/>
                </Styled.PaddingLeftRightDefault>

        </Styled.Header> 
        
  );
}

export default HeaderComponents;
 