// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Component Partial
import Buttons from './Partials/Buttons';

const Note = ({ noteText, noteTitle, idNote }) => {
    return (
        <div className="ContentNote">

            <div className = "Butons">
                <Buttons idNote={idNote}/>
            </div>
            <div className="noteContentText">
                <h3 className="noteTitle" >{noteTitle}</h3>
                     <Link to={`/note/${idNote}`}>
                        <p className="noteText">
                            {noteText}
                        </p>
                    </Link>
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
