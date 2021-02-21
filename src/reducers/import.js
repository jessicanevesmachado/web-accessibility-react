import { combineReducers } from 'redux';

import UpdateTheme from './updateTheme';
import VideoHome from './videoHome';

// esse kra é responsavel em combinar todos os reduces e retornar todos de uma vez
export default combineReducers({
    UpdateTheme,
    VideoHome
});
