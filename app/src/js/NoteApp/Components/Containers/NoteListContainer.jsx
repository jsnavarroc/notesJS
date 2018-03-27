// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Presentationals
import NoteList from '../Presentationals/NoteList/NoteList';
import AppFrame from '../Presentationals/AppFrame';
// Common Component
import Nav from '../Presentationals/Common/Nav';
import AddNoteButton from '../Presentationals/addNotes/AddNoteButton';
// Actions
import { fetchNotes } from '../../../redux/actions/fetchNotes';

class NoteListContainer extends Component {
    componentDidMount() {
        this.props.fetchNotes();
    }
    onSelectionNote(idNote) {
        console.log('ID NOTA:', idNote);

    }
    onTransformNotes(notes) {
        const index =  notes.length;
        let colNote1 = [];
        let colNote2 = [];
        if((index % 2)!==0) {
             colNote1 = notes.splice(0,  (index/2)+1);
             colNote2 = notes.splice( 0,  (index-1));
        }else{
            colNote1 = notes.splice(0,  (index/2));
            colNote2 = notes.splice( 0,  (index));
        }
        const NotesTotal = [colNote1, colNote2];
        return NotesTotal;

    }
    renderAddNoteAction = () => ( <AddNoteButton/> )

    renderNav = (addNote) => (
        <div>
            <Nav addNote = {addNote}/>
        </div>
    )

    renderBody = (notes) => (
        <div>
            <NoteList
                notes={this.onTransformNotes(notes)}
                onSelectionNote = {this.onSelectionNote}
            />
        </div>
    )

    render() {
        const { notes } = this.props;
        return (
           <AppFrame
            body= {this.renderBody(notes)}
            nav= {this.renderNav(this.renderAddNoteAction)}
           />
        );
    }
}

NoteListContainer.propTypes = {
    fetchNotes: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired,
};

NoteListContainer.defaultProps = {
    notes: [],
};
const mapDispatchToProps = { fetchNotes };

const mapStateToProps = (state) => (
    {
        notes: state.notes,
    }
);
const NoteListConect = connect(mapStateToProps, mapDispatchToProps)(NoteListContainer);
export default withRouter(NoteListConect);
