import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

export const store = createStore(
  reducer,
  {
    auth: {
      authenticated: localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "",
    },
  },
  applyMiddleware(thunk)
);
