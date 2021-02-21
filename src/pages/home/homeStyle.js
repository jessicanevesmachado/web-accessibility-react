import styled from 'styled-components'; 

export const listaInstrucoes = styled.ul`
       padding-inline-start: 18px;
       padding-top:18px;
`

export const listaInstrucoesItem = styled.li`
    font-size: ${props => props.theme.fontSizeConteudo};  
    color:${props => props.theme.color.secondary};  
    padding-bottom:18px;  
    list-style-type: none;
`

export const iconeLibra = styled.img`
 padding-right:8px;
  
`

export const videoBox = styled.div`
  width:104px;
  height:124px;
  background-color:black;  
  position:fixed;
  right: 0;
  bottom:170px;
`