import { createStore, combineReducers } from 'redux'

import { favoriteList } from './reducers';

const rootReducer = combineReducers({    
    favorite: favoriteList,
    // other reducers here
});

const store = createStore(rootReducer);

export default store;

