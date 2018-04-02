import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
// form>(div>label+Field[name component type])*2
const NoteEdit = ({ noteTitle, noteText, idNote }) => {
    return (
        <div style = {{  background: 'white' }}>
            <h2>Esta editando  {noteTitle}</h2>
            <h3> Title: {noteTitle} / Texto: {noteText}</h3>
            <form action="">
                <div>
                    <label htmlFor="noteTitle"> Title </label>
                    <Field name="noteTitle" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="noteText"> Text </label>
                    <Field name="noteText" component="textarea" type="labletext" />
                </div>
            </form>
        </div>
    );
};
NoteEdit.propTypes = {
    noteTitle: PropTypes.string,
    noteText: PropTypes.string,
    idNote: PropTypes.string,
};
const mapStateToProps = (state, props) => {
    return (
        {
         initialValues : props,
        }
    );
};
const NoteEditForm = reduxForm({ form:'NoteEdit' })(NoteEdit);
const NoteEditConnect = connect(mapStateToProps, null) (NoteEditForm);
export default NoteEditConnect;
