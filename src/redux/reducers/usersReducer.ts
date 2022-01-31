import { error } from "console";
import { UserAction, UserActionTypes, UserState } from "../../types/users";

const initialState: UserState = {
    users: [],
    error: null,
    loading: false
}

export const usersReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, loading:false, users: []}        
        default:
            return state;
    }
}