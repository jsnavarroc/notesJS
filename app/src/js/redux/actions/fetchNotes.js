// Dependencies
import { createAction } from 'redux-actions';
// Constants
import { FETCH_NOTES, FETCH_NOTES_AUX } from '../constants';
// Api
import { apiGet } from '../api';
import { urlNotes } from '../api/urls';

export const fetchNotes =  createAction(FETCH_NOTES, apiGet(urlNotes));
export const fetchNotesAux =  createAction(FETCH_NOTES_AUX, apiGet(urlNotes));
