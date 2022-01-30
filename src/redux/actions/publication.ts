import axios from "axios";
import { Dispatch } from "react";
import { PublicationAction, PublicationActionTypes } from "../../types/publication";

export const fetchPublications = () => {
  return async (dispatch: Dispatch<PublicationAction>) => {
      try{
        dispatch({type: PublicationActionTypes.FETCH_PUBLICATIONS})
        const response = await axios.get('https://61f5411262f1e300173c407d.mockapi.io/publications')
        dispatch({type: PublicationActionTypes.FETCH_PUBLICATIONS_SUCCESS, payload: response.data})
      }catch(e) {
        dispatch({type: PublicationActionTypes.FETCH_PUBLICATIONS_ERROR, payload: 'ошибка подгрузки публикаций'})
      }
  }
};
