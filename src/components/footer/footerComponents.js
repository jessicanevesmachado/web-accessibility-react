import React from "react";
import {theme} from '../theme'
import * as Styled from "../style";  
import * as StyledFooter from "../footer/footerStyle";  
import {REDUX_VIDEO_HOME} from '../../action-reducers/index';
import { useDispatch, useSelector } from "react-redux";
 
function FooterComponents() { 

  const dispatch = useDispatch()
  const VideoHome = useSelector(state => state.VideoHome);

  function Comeback() {
    
    var index= 3
    window.$('.page-title')[0].scrollIntoView(true); 
    window.$('.librasFocus'+index).focus();
   
}
  return ( 
    <Styled.Footer>
             <StyledFooter.Link href="#" onClick={(e)=>{Comeback();}}>
               <StyledFooter.imgArrowUp src={theme.icones.arrowUp} ></StyledFooter.imgArrowUp>
               <StyledFooter.SpanVoltarAoTopo>Voltar ao Topo</StyledFooter.SpanVoltarAoTopo>   
            </StyledFooter.Link>
             
            <center>
                <StyledFooter.imgAnfora  src={theme.icones.anforaFooter} alt="ícone de rodapé" ></StyledFooter.imgAnfora>
                
            </center>  
    </Styled.Footer>
  );
}

export default FooterComponents;
 