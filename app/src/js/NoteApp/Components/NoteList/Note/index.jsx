// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Component Partial
import Botuns from './Partials/Botuns';

const Note = ({ noteText, noteTitle, idNote }) => {

    const handleRemove = (idNote) => {
        console.log(idNote);
    };
    return (
        <div className="ContentNote">

            <div className = "Delete" onClick = {() => handleRemove(idNote) }>
                <Botuns/>
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
