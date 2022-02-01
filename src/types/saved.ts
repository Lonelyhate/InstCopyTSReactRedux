import { ISaved } from "./types";


export interface SavedState {
    saveds: ISaved[]
    loading: boolean
    error: null | string
}

export enum SavedActionTypes {
    FETCH_SAVED = 'FETCH_SAVED',
    FETCH_SAVED_SUCCESS = 'FETCH_SAVED_SUCCESS',
    FETCH_SAVED_ERROR = 'FETCH_SAVED_ERROR',
    FETCH_SAVED_ADDED = 'FETCH_SAVED_ADDED',
    FETCH_SAVED_DELETE = 'FETCH_SAVED_DELETE'
}

interface FetchSaved {
    type: SavedActionTypes.FETCH_SAVED
}

interface FetchSavedSuccess {
    type: SavedActionTypes.FETCH_SAVED_SUCCESS
    payload: ISaved[]
}

interface FetchSavedError {
    type: SavedActionTypes.FETCH_SAVED_ERROR
    payload: string
}

interface FetchSavedAdded {
    type: SavedActionTypes.FETCH_SAVED_ADDED
    payload: ISaved
}

interface FetchSavedDelete {
    type: SavedActionTypes.FETCH_SAVED_DELETE
    payload: ISaved
}

export type SavedAction = FetchSaved | FetchSavedSuccess | FetchSavedError | FetchSavedAdded | FetchSavedDelete