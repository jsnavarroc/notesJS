import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { notes } from './notes';
import { notesAux } from './notesAux';

export default combineReducers({
    notes,
    notesAux,
    form: reduxForm,
});
