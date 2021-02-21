import React, {useEffect,useRef} from "react";
import * as Styled from "../components/style";
export function Title(props){

  //  debugger
   const title = useRef();
   
    useEffect(e=>{

        if(props.autoFocus){ 
            title.current.focus();
        }
   })

   function clicou(){
       var ok = (typeof(props.clicou) == "function");
       if(ok){
        props.clicou();
       }
   }

    return (<Styled.pagetitle onClick={clicou}  id="title" ref={title} tabIndex={props.tabIndex} aria-label={props.title.toLowerCase()} className={"page-title librasFocus"+props.librasFocus}>{props.title}</Styled.pagetitle>)
}