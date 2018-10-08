import { createAction } from 'redux-actions';
import { INSERT_NOTES } from '../constants';
import { apiPost } from '../api';
import { urlNotes } from '../api/urls';

export const insertNotes = createAction(INSERT_NOTES,
    note => apiPost(urlNotes, note)() );
