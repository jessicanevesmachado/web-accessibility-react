import * as Storage from './storage/index'
var url = window.location.origin;

const fontSizeConteudo = ["16px","20px","24px"]
const fontSizeTitulo = ["20px","24px","32px"]
const defaulFontSize = 1;
const defaulThemeColorContrast= false;


const normalColors = {
  name:"normal",
  primary:'#6f42b6',
  secondary:'black',
  tertiary:'#F5F5F5',
  quaternary: 'white',
  pageTitle: '#6f42b6',
  btnBackground:'#499D71',
  btnColor:'white'
}

const constrastColors = {
  name:"contrast", 
  primary:'black',
  secondary:'black',
  tertiary:'white',
  quaternary: 'white',
  pageTitle: 'black',
  btnBackground:'#FFF500',
  btnColor:'black',

} 
  
export function getFontSize(titulo){

  var font  = (titulo?fontSizeTitulo:fontSizeConteudo);
  if(Storage.existeKey(Storage.fontSize)){ 
       var size = Storage.recuperarItem(Storage.fontSize);
       return (font[size-1]);
  }else{
    Storage.armazenarItem(Storage.fontSize,defaulFontSize);
    return getFontSize(titulo);
  }
}

export function getThemeColor(){
  
  if(Storage.existeKey(Storage.constrast)){ 
       var contrast = Storage.recuperarItem(Storage.constrast);
       return (contrast?constrastColors:normalColors);
  } 
  else{
    Storage.armazenarItem(Storage.constrast,defaulThemeColorContrast);
    return getThemeColor();
  }
}
 
export const theme = {
  color:normalColors,
  fontSizeConteudo:fontSizeConteudo[0],
  fontSizeTitulo:fontSizeTitulo[0],
  audioRecognize:url+"/file/alerta.mp3",
  icones: {
    anforaFooter:url+"/icon/anfora-footer.svg",
    contrast:url+"/icon/contrast.svg",
    line:url+"/icon/line.svg",
    aumentarFonte:url+"/icon/a+.svg",
    diminuirFonte:url+"/icon/a-.svg",
    menuHamburguer:url+"/icon/hamburguer.svg",
    anforaHeader:url+"/icon/anfora-header.svg",
    arrowUp:url+"/icon/arrow-up.svg",
    libras:url+"/icon/icon-libras.svg",
    view:url+"/icon/view.svg",
    share:url+"/icon/share.svg",
    menuacessibilidade: url+"/icon/menuacessibilidade.svg"
  }
};


 
