// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  { Route } from 'react-router-dom';
// Presentationals
import AppFrame from '../Presentationals/AppFrame';
// import NoteEdit from '../Presentationals/NoteEdit';
import NoteForm from '../Presentationals/AddNotes/NoteForm.jsx';
import NoteData from '../Presentationals/NoteData';
// Common Component
import Nav from '../Presentationals/Common/Nav';
// Actions
import { fetchNotes } from '../../../redux/actions/fetchNotes';
// Selector
import { getCustomerByIdNote } from '../../../redux/selectors/notes';

class CustomerNoteContainer extends Component {
    componentDidMount() {
        this.props.fetchNotes();
    }
    renderBody = (note) => {
        if(note.id !== undefined ) {
            return(
                <Route
                    path="/note/:id/edit"
                    children={

                        ({ match }) => {
                            const NoteControl =  match? NoteForm :NoteData;
                            return <NoteControl {...note}/>;
                        }
                    }
                />
            );
        }
    };

    renderNav= (note) => {
        if(note !== undefined ) {
            return(
                <Nav  {...note}/>
            );
        }
    };

    render() {
        const { note } = this.props;
        return (
            <AppFrame
                body= {this.renderBody(note)}
                nav= {this.renderNav(note)}
            />
        );
    }
}

CustomerNoteContainer.propTypes = {
    id: PropTypes.string,
    fetchNotes: PropTypes.func,
    note: PropTypes.object,
};
CustomerNoteContainer.defaultProps = {
    note: {},
};
const mapDispatchToProps = { fetchNotes };

const mapStateToProps = (state, props) => {
    if(state.notes.length>0) {
        return(
            {
                note: getCustomerByIdNote(state, props),
            }
        );
    }
};
const EditNoteConect = connect(mapStateToProps, mapDispatchToProps)(CustomerNoteContainer);

export default withRouter(EditNoteConect);
