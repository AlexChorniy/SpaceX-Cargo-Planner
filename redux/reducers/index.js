import { combineReducers } from 'redux';
import dataHandler from './dataHandler';
import isLSExist from './isLSExist';
import detailList from './detailList';

export default combineReducers({
    dataHandler,
    isLSExist,
    detailList,
});
