import { Action } from "../action/index";
import { ActionTypes } from "../action-types/index";
import axios from "axios";
import { Dispatch } from "redux";

interface FormData {
  email: string;
  password: string;
}

// signup action creator is responsible for signing up the user
// it gets values (email and password) from the sign up page
// it passes the value to backend api and gets the JWT token
export const signUp =
  (formProps: FormData, callback: () => void) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(
        "http://localhost:3090/signup",
        formProps
      );
      dispatch({
        type: ActionTypes.AUTH_USER,
        payload: response.data.token,
      });
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (e) {
      dispatch({
        type: ActionTypes.AUTH_ERROR,
        payload: "Email is in use",
      });
    }
  };

// signin action creator is responsible for signing in the user
// it gets values (email and password) from the sign in page
// it passes the value to backend api and gets the JWT token
export const signIn =
  (formProps: FormData, callback: () => void) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(
        "http://localhost:3090/signin",
        formProps
      );
      dispatch({
        type: ActionTypes.AUTH_USER,
        payload: response.data.token,
      });
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (e) {
      dispatch({
        type: ActionTypes.AUTH_ERROR,
        payload: "Please login with you valid credentials",
      });
    }
  };
// signout action creator is responsible for signing out the current user
// it remves the jst tokens from the local storage
export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: ActionTypes.AUTH_USER,
    payload: "",
  };
};
