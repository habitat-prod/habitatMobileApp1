import {FETCH_BOOKS} from '../actions/userActions';
import {fetchBooksSuccess, fetchBooksFailure} from '../actions/userActions';
import {ajax} from 'rxjs/ajax';
import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {URL} from '../constants/Url';

const fetchBooksEpic = (action$: any) =>
  action$.pipe(
    ofType(FETCH_BOOKS),
    mergeMap(() =>
      ajax.getJSON(URL.books).pipe(
        map((response: any) => fetchBooksSuccess(response)),
        catchError((error: any) => of(fetchBooksFailure(error.message))),
      ),
    ),
  );

export default fetchBooksEpic;
