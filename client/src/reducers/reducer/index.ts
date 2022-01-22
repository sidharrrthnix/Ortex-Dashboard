import { combineReducers } from "redux";
import authReducer from "./authReducer";

export const reducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof reducer>;
