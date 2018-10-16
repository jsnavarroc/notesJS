// Dependencies
import { handleActions } from 'redux-actions';
// Constants
import { FETCH_NOTES, INSERT_NOTES } from '../constants';

export const notes = handleActions ({
    [FETCH_NOTES]: (state, action) => [...action.payload],
    [INSERT_NOTES]: (state, action) => [...state, action.payload],
}, []);
