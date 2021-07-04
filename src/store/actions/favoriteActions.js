export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE"
export const GET_FAVORITE = "GET_FAVORITE"

export function addToFavorite(jobAdvertisement){
    return {
        type:ADD_TO_FAVORITE,
        payload:jobAdvertisement
    }
}

export function removeFromFavorite(jobAdvertisement){
    return {
        type:REMOVE_FROM_FAVORITE,
        payload:jobAdvertisement
    }
}