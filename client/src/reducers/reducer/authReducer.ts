import { Action } from "../action";
import { ActionTypes } from "../action-types";

export interface AuthState {
  authenticated: string | null;
  errorMessage?: string | null;
}
//setting the default state for the authReducer
const initialState = {
  authenticated: "",
  errorMessage: "",
};
// reducer function responsible for handing the authentication state in
// component
const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: action.payload };
    case ActionTypes.AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
export default authReducer;
