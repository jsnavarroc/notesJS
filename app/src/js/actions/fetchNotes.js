// Dependencies
import { createAction } from 'redux-actions';
// Constants
import { FETCH_NOTES } from '../constants';

const notes = [
    { idNote:'n1', noteTitle: 'Nota 1', noteText: 'Texto' },
    { idNote:'n2', noteTitle: 'Nota 2', noteText: 'Texto' },
    { idNote:'n3', noteTitle: 'Nota 3', noteText: 'Texto' },
    { idNote:'n4', noteTitle: 'Nota 4', noteText: 'Texto' },
    { idNote:'n5', noteTitle: 'Nota 5', noteText: 'Texto' },
    { idNote:'n6', noteTitle: 'Nota 6', noteText: 'Texto' },
    { idNote:'n7', noteTitle: 'Nota 7', noteText: 'Texto' },
    { idNote:'n8', noteTitle: 'Nota 8', noteText: 'Texto' },
    { idNote:'n9', noteTitle: 'Nota 9', noteText: 'Texto' },
    { idNote:'n10', noteTitle: 'Nota 10', noteText: 'Texto' },
    { idNote:'n11', noteTitle: 'Nota 11', noteText: 'Texto' },
    { idNote:'n12', noteTitle: 'Nota 12', noteText: 'Texto' },
];
export const fetchNotes =  createAction(FETCH_NOTES, () => notes);
