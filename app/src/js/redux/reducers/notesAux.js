// Dependencies
import { handleActions } from 'redux-actions';
// Constants
import { FETCH_NOTES_AUX } from '../constants';

export const notesAux = handleActions ({
    [FETCH_NOTES_AUX]: (state, action) => [...action.payload],
}, []);
