export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export const fetchBooks = (): {type: typeof FETCH_BOOKS} => ({
  type: FETCH_BOOKS,
});

export const fetchBooksSuccess = (
  books: any[],
): {type: typeof FETCH_BOOKS_SUCCESS; payload: any[]} => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = (
  error: string,
): {type: typeof FETCH_BOOKS_FAILURE; payload: string} => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});
