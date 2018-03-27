// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ body, nav }) => {
    return (
        <div className = "scssShadow">
           {nav}
           {body}
        </div>
    );
};
Note.propTypes = {
    body: PropTypes.element.isRequired,
};

export default Note;
