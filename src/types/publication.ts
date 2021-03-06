import { IPublication } from "./types"

export interface PublicationState {
    publications: IPublication[],
    loading: boolean,
    error: null | string
}

export enum PublicationActionTypes {
    FETCH_PUBLICATIONS = 'FETCH_PUBLICATIONS',
    FETCH_PUBLICATIONS_SUCCESS = 'FETCH_PUBLICATIONS_SUCCESS',
    FETCH_PUBLICATIONS_ERROR = 'FETCH_PUBLICATIONS_ERROR',
}

interface FetchPublicationAction {
    type: PublicationActionTypes.FETCH_PUBLICATIONS
}
interface FetchPublicationSuccessAction {
    type: PublicationActionTypes.FETCH_PUBLICATIONS_SUCCESS
    payload: IPublication[]
}

interface FetchPublicationErrorAction {
    type: PublicationActionTypes.FETCH_PUBLICATIONS_ERROR
    payload: string
}

export type PublicationAction = FetchPublicationAction | FetchPublicationErrorAction | FetchPublicationSuccessAction
