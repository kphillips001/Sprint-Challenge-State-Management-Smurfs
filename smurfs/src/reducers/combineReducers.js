import { combineReducers } from 'redux';

import { smurfReducer, addSmurfReducer} from './index';


export default combineReducers({
    smurfData: smurfReducer,
    addSmurfData: addSmurfReducer

})