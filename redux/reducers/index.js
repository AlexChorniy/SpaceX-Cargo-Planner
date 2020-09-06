import { combineReducers } from 'redux';
import dataHandler from './dataHandler';
import isLSExist from './isLSExist';

export default combineReducers({
    dataHandler,
    isLSExist,
});
