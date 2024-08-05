import {combineEpics} from 'redux-observable';
import fetchBooksEpic from './fetchBooksEpic';
const rootEpic = combineEpics(fetchBooksEpic);

export default rootEpic;
