import { SavedAction, SavedActionTypes, SavedState } from "../../types/saved";

const initialState: SavedState = {
    saveds: [],
    loading: false,
    error: null
}

export const savedReducer = (state = initialState, action:SavedAction):SavedState => {
    switch(action.type) {
        case SavedActionTypes.FETCH_SAVED:
            return {
                ...state, loading: true, error: null, saveds: []
            }
        case SavedActionTypes.FETCH_SAVED_SUCCESS:
            return {
                ...state, loading: false, error: null, saveds: action.payload
            }
        case SavedActionTypes.FETCH_SAVED_ERROR:
            return {
                ...state, loading: false, error: action.payload, saveds: []
            }
        case SavedActionTypes.FETCH_SAVED_ADDED: 

            return {
                ...state, loading: false, error: null, saveds: [...state.saveds, action.payload]
            }
        case SavedActionTypes.FETCH_SAVED_DELETE:
            return {
                ...state, 
                loading: false, 
                error: null, 
                saveds: [...state.saveds.filter(photo => photo.id_photo !== action.payload.id_photo)]
            }
        default:
            return state
    }
}