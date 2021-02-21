import styled from 'styled-components'

export const vh = styled.div.attrs(props => ({
    className:props.className
}))`

    & input , span{
        position: absolute !important;
        clip: rect(1px, 1px, 1px, 1px);
        padding:0 !important;
        border:0 !important;
        height: 1px !important;
        width: 1px !important;
        overflow: hidden;
        left: -300px;
    }
`
 
export const MenuHambuguer = styled.div`
   position: relative;
   display: inline-block; 

    &:hover{
        //background: darkBlue;
    }
    &:focus {
       // background: darkBlue;
    }
   
`

export const spanStateDescription = styled.span.attrs(props => ({
    className:props.className
}))`
   
    &.menu{
        position: absolute;
        top: 3px;
        left: 30px;
    }
`

export const ul = styled.ul`
    list-style: none;
    margin: 0;
    padding:0;
    padding-top: 16px;

    display:${props => props.open?"block":"none"}
   
`

export const a = styled.a`
     display: block;
    min-width: 100%;
    margin-top: 0.125rem;
    white-space: nowrap;
    color:white;
    text-decoration:none;
    font-size: ${props => props.theme.fontSizeConteudo};  
 

`

export const li = styled.li`
     margin: 0;
     padding: 0;
     padding-top: 16px;

`

export const Menu = styled.div`
   // background: yellow;
     &:focus {
      // background: red;
    }

    & ul:focus {
      // background: red;
    }
    
    & ul{ 
    display:${props => props.open?"block":"none"}
    }

    

`
export const menuFake = styled.div`
display: flex; 
align-items: center;


& svg{
   
    margin-right: 5px;

}

`

