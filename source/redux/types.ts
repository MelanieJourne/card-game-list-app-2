import CardGame from '../class/CardGame';

// State Type
export type FavoriteState = CardGame[];

export type AppState = {
    favoriteList: FavoriteState,
    // add future state slices here
}

//Actions values
export enum FAVORITE_ACTION_TYPES {
    ADD_FAV = 'GAME_FAVORITE/ADD_GAME',
    REMOVE_FAV = 'GAME_FAVORITE/REMOVE_GAME',
}

// Actions Types
export type AddFavAction = {
    type: string;
    data: CardGame;
}
export type RemoveFavAction = {
    type: string;
    data: CardGame;
}
export type FavoriteAction = RemoveFavAction | AddFavAction;