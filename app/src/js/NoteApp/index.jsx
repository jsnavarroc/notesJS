// Dependencies
import React from 'react';

// Partials Components
import Nav from './Components/Common/Nav';
import NoteList from './Components/NoteList';

const Note = () => {
    return (
        <div className = "scssShadow">
           <Nav/>
           <NoteList/>
        </div>
    );
};

export default Note;
