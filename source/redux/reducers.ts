import { FavoriteState, FavoriteAction, FAVORITE_ACTION_TYPES, AddFavAction, RemoveFavAction} from './types';

export const initialState: FavoriteState = [];

export const favoriteList = (
    state: FavoriteState = initialState,
    action: FavoriteAction
): FavoriteState => {
    const newState: FavoriteState = state;
    switch (action.type){
        case FAVORITE_ACTION_TYPES.ADD_FAV:
            // pay attention to type-casting on action
            let data1 = action.data;
            return [...newState, data1];
            
        case FAVORITE_ACTION_TYPES.REMOVE_FAV:

            let data2 = action.data;
            let newArray = newState.filter(
                game => game.id != data2.id);
            return newArray;

        default:
            return state;
    }
}