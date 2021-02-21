// esse metodos recebe as actions do reduce e atualiza os valores no estado e retorna um novo
// array pois o estado é imutavel

 

const initialState = false;

  export default function UpdateTheme(state=initialState , action) {
   
      switch (action.type) {
        case 'REDUX_UPDATE_THEME':
          return { ...state, status: action.status }
        default:
          return state;
      }
    }
    