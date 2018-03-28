import React from 'react';
import PropTypes from 'prop-types';

const NoteEdit = ({ noteTitle, noteText, idNote }) => {
    return (
        <div style = {{  background: 'white' }}>
            <h2>Esta editando  {noteTitle}</h2>
            <h3> Title: {noteTitle} / Texto: {noteText}</h3>
        </div>
    );
};

NoteEdit.propTypes = {
    noteTitle: PropTypes.string,
    noteText: PropTypes.string,
    idNote: PropTypes.string,
};

export default NoteEdit;
