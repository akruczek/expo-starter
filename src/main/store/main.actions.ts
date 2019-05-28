import { Action } from 'redux';

export enum MAIN_ACTIONS {
  TOGGLE_COUNTER_ACCESS = '[Main]: toggle counter access',
  TOGGLE_COUNTER_ACCESS_SUCCESS = '[Counter]: toggle counter access success',
  TOGGLE_COUNTER_ACCESS_ERROR = '[Counter]: toggle counter access error',
}

export interface ToggleCounterAccessAction extends Action {
  payload: {};
}

export type MainActions = ToggleCounterAccessAction;

const newAction = <P>(type: MAIN_ACTIONS) =>
  (payload?: P): { type: MAIN_ACTIONS, payload?: P } => ({ type, payload });

export const toggleCounterAccess =
  newAction<{}>(MAIN_ACTIONS.TOGGLE_COUNTER_ACCESS);

export const toggleCounterAccessSuccess =
  newAction<boolean>(MAIN_ACTIONS.TOGGLE_COUNTER_ACCESS_SUCCESS);

export const toggleCounterAccessError =
  newAction<{}>(MAIN_ACTIONS.TOGGLE_COUNTER_ACCESS_ERROR);
