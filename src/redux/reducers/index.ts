import { combineReducers } from "redux";
import { publicationsReducer } from "./publicationsReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    publication: publicationsReducer,
    users: usersReducer
})

export type RootState = ReturnType<typeof rootReducer>