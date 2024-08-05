import {
  FETCH_BOOKS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_SUCCESS,
} from '../actions/userActions';

interface UserState {
  books: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  books: [],
  loading: false,
  error: null,
};

type Action =
  | {type: typeof FETCH_BOOKS}
  | {type: typeof FETCH_BOOKS_SUCCESS; payload: any[]}
  | {type: typeof FETCH_BOOKS_FAILURE; payload: string};

const userReducer = (state = initialState, action: Action): UserState => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {...state, loading: true, error: null};
    case FETCH_BOOKS_SUCCESS:
      return {...state, books: action.payload, loading: false};
    case FETCH_BOOKS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default userReducer;
