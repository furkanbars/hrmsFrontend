import {favoriteItems} from "../initialValues/favoriteItems"
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from "../actions/favoriteActions"

const initialState = {
    favoriteItems : favoriteItems
}

export default function favoriteReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_TO_FAVORITE:
            let jobAdvertisement = state.favoriteItems.find(f=>f.jobAdvertisement.id === payload.id)
            if (!jobAdvertisement) {
                return {
                    ...state,
                    favoriteItems:[...state.favoriteItems,{jobAdvertisement:payload}]
                }
            }else{
                return type=REMOVE_FROM_FAVORITE
            }
        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                favoriteItems:state.favoriteItems.filter(f=>f.jobAdvertisement.id !== payload.id)
            }
        default:
            return state;
    }
}