import React from 'react';
import ReactDOM from 'react-dom'; 
import reportWebVitals from './reportWebVitals'; 
import ThemeComponents from './components/theme/themeComponents'

// é responsavel em atualizar os componentes da nossa aplicacao exemplo lista de todo
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render( 
  <React.StrictMode>
     <Provider store={store}>
        <ThemeComponents> 
        </ThemeComponents>
     </Provider>
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
