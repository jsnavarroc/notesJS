import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { notes } from './notes';
export default combineReducers({
    notes,
    form: reduxForm,
});
