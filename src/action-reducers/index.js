// dispara a action 'REDUX_UPDATE_THEME' la no reduce (vai ter varios exporte aqui)
 
export function REDUX_UPDATE_THEME(status) {
    
    return {
      type: 'REDUX_UPDATE_THEME',
      status,
    }
    
  }
  
  export function REDUX_VIDEO_HOME(status) {
    
    return {
      type: 'REDUX_VIDEO_HOME',
      status,
    }
    
  }