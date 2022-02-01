import { combineReducers } from "redux";
import { publicationsReducer } from "./publicationsReducer";
import { savedReducer } from "./savedReducers";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    publication: publicationsReducer,
    users: usersReducer,
    saveds: savedReducer
})

export type RootState = ReturnType<typeof rootReducer>