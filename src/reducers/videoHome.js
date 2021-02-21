// esse metodos recebe as actions do reduce e atualiza os valores no estado e retorna um novo
// array pois o estado é imutavel

 

const initialState = {
  url:null,
  index:null,
};

  export default function VideoHome(state=initialState , action) {
   
      switch (action.type) {
        case 'REDUX_VIDEO_HOME': 
         
          return { ...state, url: action.status.url }
        default:
          return state;
      }
    }
    