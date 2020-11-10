import { createStore, combineReducers } from 'redux'

import { favoriteList } from './reducers';
import { AppState } from './types';

const rootReducer = combineReducers({    
    favorite: favoriteList,
    // other reducers here
});

const store:AppState = createStore(rootReducer);

export default store;

