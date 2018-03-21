// Dependencies
import { handleActions } from 'redux-actions';
// Constants
import { FETCH_NOTES } from '../constants';

export const notes = handleActions ({
    [FETCH_NOTES]: (state, action) => [...action.payload],
}, []);
