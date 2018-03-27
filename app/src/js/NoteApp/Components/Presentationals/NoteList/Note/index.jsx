// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Component Partial
import Buttons from './Partials/Buttons';

const Note = ({ noteText, noteTitle, idNote, handleSelector }) => {
    return (
        <div className="ContentNote">

            <div className = "Butons" onClick = {() => handleSelector(idNote)}>
                <Buttons idNote={idNote}/>
            </div>
            <div className="noteContentText">
                <h3 className="noteTitle" >{noteTitle}</h3>
                <p className="noteText">
                    {noteText}
                </p>
            </div>
        </div>
    );
};

Note.defaultPropTypes = {
    noteText : PropTypes.string.isRequired,
    noteTitle : PropTypes.string.isRequired,
    idNote : PropTypes.number.isRequired,
};
export default Note;
