// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Presentationals
import AppFrame from '../Presentationals/AppFrame';
// Common Component
import Nav from '../Presentationals/Common/Nav';
import AddNoteButton from '../Presentationals/addNotes/AddNoteButton';
// Actions
import { fetchNotes } from '../../../redux/actions/fetchNotes';

class DeleteNoteContainer extends Component {
    renderAddNoteAction = () => ( <AddNoteButton/> )

    renderNav = (addNote) => (
        <div>
            <Nav/>
        </div>
    )

    renderBody = () => (
        <div style = {{  background: 'white' }}>
             <h1>Delete Note Container</h1>
        </div>
    )

    render() {
        return (
           <AppFrame
            body= {this.renderBody()}
            nav= {this.renderNav(this.renderAddNoteAction)}
           />
        );
    }
}

DeleteNoteContainer.propTypes = {
    fetchNotes: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired,
};

DeleteNoteContainer.defaultProps = {
    notes: [],
};
const mapDispatchToProps = { fetchNotes };

const mapStateToProps = (state) => (
    {
        notes: state.notes,
    }
);
const DeleteNoteConect = connect(mapStateToProps, mapDispatchToProps)(DeleteNoteContainer);
export default withRouter(DeleteNoteConect);
