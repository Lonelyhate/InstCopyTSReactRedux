import axios from "axios"
import { Dispatch } from "react"
import { SavedAction, SavedActionTypes } from "../../types/saved"
import { ISaved } from "../../types/types"

export const fetchSaveds = () => {
    return async (dispatch: Dispatch<SavedAction>) => {
        try {
            dispatch({type: SavedActionTypes.FETCH_SAVED})
            const response = await axios.get('https://61f5411262f1e300173c407d.mockapi.io/saved')
            dispatch({type: SavedActionTypes.FETCH_SAVED_SUCCESS, payload: response.data})
        }catch(e) {
            dispatch({type: SavedActionTypes.FETCH_SAVED_ERROR, payload: 'ошибочка'})
        }
    }
}

export const fetchAddPhoto = (obj: ISaved) => {
    return async (dispatch: Dispatch<SavedAction>) => {
        try{
            const response = await axios.post('https://61f5411262f1e300173c407d.mockapi.io/saved', obj)
            dispatch({type: SavedActionTypes.FETCH_SAVED_ADDED, payload: response.data})
        }catch(e) {
            dispatch({type: SavedActionTypes.FETCH_SAVED_ERROR, payload: 'ошибка'})
        }
    }
}

export const fetchDeletePhoto = (id: number) => {
    return async (dispatch: Dispatch<SavedAction>) => {
        const response = await axios.delete(`https://61f5411262f1e300173c407d.mockapi.io/saved/${id}`)
        dispatch({type: SavedActionTypes.FETCH_SAVED_DELETE, payload: response.data})
    }
}