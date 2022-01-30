import { combineReducers } from "redux";
import { publicationsReducer } from "./publicationsReducer";

export const rootReducer = combineReducers({
    publication: publicationsReducer
})

export type RootState = ReturnType<typeof rootReducer>