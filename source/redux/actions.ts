
import CardGame from "../class/CardGame";
import { AddFavAction, RemoveFavAction, FAVORITE_ACTION_TYPES}  from "./types";

export const addFavorite = (game:CardGame): AddFavAction => ({
    type: FAVORITE_ACTION_TYPES.ADD_FAV,
    data: game,
});

export const removeFavorite = (game:CardGame): RemoveFavAction => ({
    type: FAVORITE_ACTION_TYPES.REMOVE_FAV,
    data: game,
});