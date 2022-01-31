import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/users"


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://61f5411262f1e300173c407d.mockapi.io/users')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        }catch(e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка загрузки пользователей'})
        }
    }
}