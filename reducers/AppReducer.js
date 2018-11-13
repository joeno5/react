import { combineReducers } from 'redux';
//import NavReducer from './NavReducer';
import { listings } from './ListingsReducer';

const AppReducer = combineReducers({
    listings
});

export default AppReducer;