import React from 'react'
import * as Styled from './hamburguerStyle.js'
import * as StyledMain from '../../../components/style'
import * as Icones from "../../../components/icones/iconComponents";
import { useDispatch, useSelector } from "react-redux";
import {REDUX_VIDEO_HOME} from '../../../action-reducers/index';


export default function HamburguerComponent(props) {

    const dispatch = useDispatch();
    const ulMenu = React.useRef(null);
    const [isChecked, setisChecked] = React.useState(false);

    var focus = -1;
 
    function onFocus(item) {
         
        if(item != focus){
                focus = item;
                
               // dispatch(REDUX_VIDEO_HOME(data)) 
               
        }

       
    }
    const handleMenu = () => {
       //debugger
        var newstate = !isChecked;
        setisChecked(newstate);
        if(newstate){
 
               
                setTimeout(e=>{
                      // debugger
                        ulMenu.current.focus();
                }, 200);
        }
        
        if(typeof(props.handleMenu) != "undefined")
            props.handleMenu(newstate);

    }
    return (<>
                    <Styled.MenuHambuguer > 

                           <Styled.menuFake tabIndex="5" aria-haspopup="true"   onClick={handleMenu} aria-expanded={isChecked} role="button"  aria-label="Menu Hamburguer">
                              <Icones.Hamburguer ></Icones.Hamburguer> 
                              <span aria-hidden ="true">Menu</span>
                           </Styled.menuFake>
                           <Styled.ul open={isChecked}  >
                                <Styled.li className="librasFocus0" onFocus={(e)=>{onFocus(0)} }  ref={ulMenu} tabIndex="6" ><Styled.a  href="/">Dicas de Acessibilidade</Styled.a></Styled.li>
                                <Styled.li className="librasFocus1" onFocus={(e)=>{onFocus(1)} } tabIndex="7"><Styled.a href="#">Reconhecer produtos</Styled.a></Styled.li>
                                <Styled.li  className="librasFocus2" onFocus={(e)=>{onFocus(2)} } tabIndex="8"><Styled.a href="#">Produtos Recentes</Styled.a></Styled.li>
                           </Styled.ul>
                            
                            
                    </Styled.MenuHambuguer>
            
            </>
                    
              
    )
  } 
 