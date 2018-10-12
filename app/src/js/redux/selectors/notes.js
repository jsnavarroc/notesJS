import { createSelector } from 'reselect';

const getNotes = state => [...state.notes];
const getCustomerByIdNote = createSelector(
    (state, props) =>  state.notes.find(note => note.idNote === props.idNote),
    note => note
);

export {
    getNotes,
    getCustomerByIdNote,
};
