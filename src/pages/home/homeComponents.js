import React, {useState,useEffect,useCallback} from "react";
import * as Styled from "../../components/style";
import * as HomeStyled from "./homeStyle";

import Layout from '../_layout'
import {Title} from '../_title'
import { theme } from "../../components/theme";
import {useFirstRender} from '../../hooks/useFirstRender'
import { useSelector,useDispatch } from 'react-redux'


 

function getDescription(index,texto){
  //debugger
  var teste = (index+1)+". "+texto;
  return teste
}

function Home() { 

  const dispatch = useDispatch();

  const firstRender = useFirstRender();
  const [instrutionsSelected,SetInstrutionsSelected]  = useState(null);


  var [instrucoes,SetInstrucoes] = useState([
    { icon:true,    description:"Busque Referências sobre acessibilidade na Web. Existe diversos conteúdos de boas práticas disponível na internet para te ajudar a desenvolver aplicações mais acessíveis como: W3C, GOV.BR e WPT entre outras."},
    { icon:true,   description:"Implemente ajustes de fontes. Usuários com deficiência visual ou baixa visão podem ter dificuldade em ler o conteúdo do seu site, por isso é importante disponibilizar uma funcionalidade em que o usuário possa ajustar a fonte conforme sua necessidade."},
    { icon:true,   description:"Descreve corretamente o atributo alt da imagem. Você não precisa ser mestre na descrição da imagem, precisa escrever algo que faça sentido e fique claro para o usuário. Pois usuários de leitor de tela e usuários com baixa conexão de internet, podem não conseguir ver a imagem, logo o atributo alt é acionado."},
    { icon:true,   description:"Implemente Alto contraste. Implementar alto contraste é mais simples do que você imagina e faz muito diferença na vida das pessoas com algum tipo de deficiência visual."},
    { icon:true,   description:"Declare a linguagem correta do documento HTML. Essa marcação apesar de simples é muito importante, pois quando leitor de tela acessar sua página, ele pode ajustar a linguagem e entonação da fala conforme a linguagem do documento configurado."},
    { icon:true,   description:"Implemente tradução em libras do conteúdo do seu site. Essa funcionalidade é super importante pois traz acessibilidade e inclusão para milhares de brasileiros que se comunicam através da Língua Brasileira de Sinais Libras"},
    {icon:true, description:"Utilize HTML Semântica correta. Com o HTML5 isso ficou mais fácil, pois cada elemento ja vem com um propósito pré-definido. Além disso usar uma semântica correta é importante para SEO e principalmente para leitores de tela que ao ler o elemento ja informa ao usuário qual é o significado daquele componente."}
  ])
 
 

  function selectInstruction(index){
    SetInstrutionsSelected(index); 
  }

 
  return (
    <Layout>
        <> 
                     <Title librasFocus="3"  tabIndex="10" autoFocus={false} title="Dicas de Acessibilidade" />
                     <div>
                     
                     <Styled.PaddingLeftRightDefault>
                      
                       <HomeStyled.listaInstrucoes>
                           {instrucoes.map((i,index)=>{
                             return ( <HomeStyled.listaInstrucoesItem onClick={(e)=>{selectInstruction(index+4)}} className={"librasFocus"+(index+4)} tabIndex={index+11} key={index}>
                              <Styled.displayFlex>
                                
                             <span>{getDescription(index,i.description)}</span>
                              </Styled.displayFlex>  
                             </HomeStyled.listaInstrucoesItem> )
                           })}  
                       </HomeStyled.listaInstrucoes>  
                     </Styled.PaddingLeftRightDefault>

               
                  
                     </div>

                    
                     
               </>
    </Layout> 
  );
}

export default Home;
