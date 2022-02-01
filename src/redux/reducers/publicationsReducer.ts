import {PublicationState,PublicationAction, PublicationActionTypes} from '../../types/publication'

const initialState: PublicationState = {
    publications: [],
    loading: false,
    error: null
}

export const publicationsReducer = (state = initialState, action:PublicationAction):PublicationState => {
  switch(action.type) {
    case PublicationActionTypes.FETCH_PUBLICATIONS:
        return {
            ...state, loading: true, error: null, publications: []
        }
    case PublicationActionTypes.FETCH_PUBLICATIONS_SUCCESS:
        return {
            ...state, loading: false, error: null, publications: action.payload
        }
    case PublicationActionTypes.FETCH_PUBLICATIONS_ERROR:
        return {
            ...state, loading: false, error: action.payload, publications: []
        }
    default:
        return state
  }
};
