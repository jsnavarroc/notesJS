import React from 'react';
import PropTypes from 'prop-types';

const NoteData = ({ noteTitle, noteText }) => {
    return (
        <div style = {{  background: 'white' }}>
            <div className="customer-data">
                <h2>{noteTitle}</h2>
                <div><strong>Text: </strong><i>{noteText}</i></div>
            </div>
        </div>
    );
};

NoteData.propTypes = {
    noteTitle: PropTypes.string,
    noteText: PropTypes.string,
    id: PropTypes.string,
};

export default NoteData;
