import styled, { css } from 'styled-components'; 

export const Footer = styled.footer`
  background: ${props => props.theme.color.primary};  
  height: 80px;
  position:relative;
 
`;


export const App = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  width:100%;
  /*max-width: 500px;
    margin: 0 auto;*/
`;

export const Main = styled.div`
  min-height: calc(100vh - 80px) !important;
  background-color: ${props => props.theme.color.tertiary};  
  width: 100%;
  position:relative;
`;

export const Header = styled.header` 
  background: ${props => props.theme.color.primary};  
  height:100%;
  width: 100%;
`;

export const PaddingLeftRightDefault = styled.div` 
  padding-left:24px;
  padding-right:24px;
   
`;

export const Right = styled.div` 
 float:right 
`;
export const Left = styled.div` 
 float:left 
`;

export const Clear = styled.div` 
clear: both;
`;

export const OverFlowX = styled.div` 
overflow-x:auto;
`;

export const pagetitle = styled.h2` 
padding:0;
margin:0;
font-size: ${props => props.theme.fontSizeTitulo};  
color:${props => props.theme.color.pageTitle};  
padding:24px;
background-color: ${props => props.theme.color.quaternary}; 
font-weight: normal;
text-transform:uppercase;

 
`;

export const pageDescription= styled.div` 
padding:0;
margin:0;
font-size: ${props => props.theme.fontSizeConteudo};  
color:${props => props.theme.color.secondary};   
background-color: ${props => props.theme.color.quaternary}; 
font-weight: normal;
padding-bottom: 8px;
 
`;

export const Box = styled.div`
   width:100%;
   height:100%;
   background-color:white;
   overflow-x:auto
`

export const displayFlex = styled.div`
   display:flex;
   align-items:center;
     
`
export const ButtonFull = styled.div`
 border:1px solid red; 
 padding-bottom: 8px;
 padding-left: 24px;
 max-width:500px;

 @media(max-width: 500px) {
    div > button {
    
     margin-right:0px !important;
     margin:0 auto;
    }
  }
`

export const paragraph = styled.p`
   font-size: ${props => props.theme.fontSizeConteudo};  
   

`

export const Line = styled.div`
   background-color: ${props => props.theme.color.tertiary};  
   width: 100%;
   height:8px;
     
`
 
const baseButtonStyle = css`
   font-size: ${props => props.theme.fontSizeConteudo};  
   text-transform: uppercase;
   cursor: pointer;
   display: flex; 
   align-items: center;
   padding: 16px 8px;
   border: 1px solid ${props => props.theme.color.btnBackground};
   background-color: ${props => props.theme.color.btnBackground};  
   color: ${props => props.theme.color.btnColor};  
   border-radius: 4px;

   & svg{
     padding-right:8px;
   }
   & span{
    text-transform: uppercase;
   }
`;

export const Wrapperbutton = styled.div` 
  ${baseButtonStyle}

`

export const button = styled.button` 
  ${baseButtonStyle}
`
export const buttonFull = styled.button` 
  ${baseButtonStyle}
  margin-left:20px;

  @media(max-width: 500px) {
    margin-left:0px;
    margin:0 auto;
  }

  
`

export const SVGIcon = styled.svg`
    fill: ${props => props.theme.color.btnBackground};  
`

export const SkipNavigation = styled.a`
  left: 50%;
  position: absolute;
  transform: translateY(-100%);

  &:focus{
    //transform: translateY(0%);
  }
`

export const videoBox = styled.div`
  width:104px;
  height:124px;
  background-color:black;  
  position:fixed;
  right: 0;
  bottom:170px;
`