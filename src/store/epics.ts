import { combineEpics } from 'redux-observable';
import { setCountEpic } from '../counter/store/counter.epics';

export const epics = combineEpics(
  setCountEpic,
);
