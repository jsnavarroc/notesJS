import { createSelector } from 'reselect';

export const getNotes = state => state.notes;
export const getCustomerByIdNote = createSelector(
    (state, props) =>  state.notes.find(note => note.idNote === props.idNote),
    note => note
);
