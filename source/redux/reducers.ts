import { FavoriteState, FavoriteAction, FAVORITE_ACTION_TYPES, AddFavAction} from './types';

export const initialState: FavoriteState = [];

export const favoriteList = (
    state: FavoriteState = initialState,
    action: FavoriteAction
): FavoriteState => {
    const newState: FavoriteState = state;
    switch (action.type){
        case FAVORITE_ACTION_TYPES.ADD_FAV:
            // pay attention to type-casting on action
            const { data } = <AddFavAction>action;
            return [...newState, data];
            
            // define rest of actions here
        default:
            return state;
    }
}