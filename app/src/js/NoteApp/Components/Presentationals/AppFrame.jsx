// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Partials Components
import Nav from './Common/Nav.jsx';
const Note = ({ body }) => {
    return (
        <div className = "scssShadow">
           <Nav/>
           {body}
        </div>
    );
};
Note.propTypes = {
    body: PropTypes.element.isRequired,
};

export default Note;
