import { combineEpics } from 'redux-observable';
import { setCountEpic } from '../counter/store/counter.epics';
import { setCounterAccessEpic } from '../main/store/main.epics';

export const epics = combineEpics(
  setCountEpic,
  setCounterAccessEpic,
);
