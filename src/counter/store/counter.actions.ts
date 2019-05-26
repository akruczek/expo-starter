import { Action } from 'redux';

export enum COUNTER_ACTIONS {
  SET_COUNT = '[Counter]: set count',
  SET_COUNT_SUCCESS = '[Counter]: set count success',
  SET_COUNT_ERROR = '[Counter]: set count error',
}

export interface SetCountAction extends Action {
  payload: number;
}

export type CounterActions = SetCountAction;

const newAction = <P>(type: COUNTER_ACTIONS) =>
  (payload?: P): { type: COUNTER_ACTIONS, payload?: P } => ({ type, payload });

export const setCount =
  newAction<number>(COUNTER_ACTIONS.SET_COUNT);

export const setCountSuccess =
  newAction<number>(COUNTER_ACTIONS.SET_COUNT_SUCCESS);

export const setCountError =
  newAction<any>(COUNTER_ACTIONS.SET_COUNT);
