// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  { Route } from 'react-router-dom';
// Presentationals
import AppFrame from '../Presentationals/AppFrame';
import NoteEdit from '../Presentationals/NoteEdit';
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
        if(note.idNote !== undefined ) {
            return(
                <Route
                    path="/note/:idNote/edit"
                    children={

                        ({ match }) => {
                            const NoteControl =  match? NoteEdit :NoteData;
                            return <NoteControl {...note}/>;
                        }
                    }
                />
        );
    }
};

    render() {
        const { note } = this.props;
        return (
            <AppFrame
                body= {this.renderBody(note)}
                nav= {<Nav/>}
            />
        );
    }
}

CustomerNoteContainer.propTypes = {
    idNote: PropTypes.string.isRequired,
    fetchNotes: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired,
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
