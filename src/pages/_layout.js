import React from "react";
import * as Styled from "../components/style";
import HeaderComponents from "../components/header/headerComponents";
import FooterComponents from "../components/footer/footerComponents";

function Layout(props) { 

  return (
    <Styled.App>
        <Styled.Main>
                  <HeaderComponents/> 
                  {props.children}
        </Styled.Main> 
        <FooterComponents/>
    </Styled.App>
  );
}

export default Layout;
