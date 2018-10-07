import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { required, maxLength15, validate } from '../../../../tools/validateForm.jsx';

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );

// form>(div>label+Field[name component type])*2
const NoteEdit = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (

        <div style = {{  background: 'white' }}>
        <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="noteTitle"
            component={renderTextField}
            label="Title Note"
            validate={[maxLength15, required]}
          />
        </div>

        <div>
            <Field
            name="noteText"
            component={renderTextField}
            label="Notes"
            multiLine={true}
            rows={2}
            />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
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
const NoteEditForm = reduxForm({ form:'NoteEdit', validate })(NoteEdit);
const NoteEditConnect = connect(mapStateToProps, null) (NoteEditForm);
export default NoteEditConnect;
