import { ActionTypes } from "../action-types";

interface AuthUserAcion {
  type: ActionTypes.AUTH_USER;
  payload: string;
}
interface AuthUserErrorAction {
  type: ActionTypes.AUTH_ERROR;
  payload: string;
}

export type Action = AuthUserAcion | AuthUserErrorAction;
