import { createStore } from 'redux';
import AppReducer from '../reducers/AppReducer';

const Store = createStore(
    AppReducer,
);

export default Store;