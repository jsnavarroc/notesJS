import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import TextField from 'material-ui/TextField';
import { required, maxLength15, validate } from '../../../tools/validateForm';

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
const FormNote = (props) => {
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

FormNote.propTypes = {
    noteTitle: PropTypes.string,
    noteText: PropTypes.string,
    id: PropTypes.string,
};

const NoteEditForm = reduxForm({ form:'NoteEdit', validate })(FormNote);
export default NoteEditForm;
