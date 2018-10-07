import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import NoteForm from './NoteForm.jsx';
import { SubmissionError } from 'redux-form';
class AddModalNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
        };
    }

    render() {
       const { handleClose } =  this.props;
       const  handleSubmit = values => {
                return this.props.insertCustomer(values).then( r => {
                    if (r.error) {
                        throw new SubmissionError(r.payload);
                    }
                });
        };
        const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={handleClose}
			/>,
			<FlatButton
				label="Add"
				primary={true}
				keyboardFocused={true}
				onClick={handleClose}
			/>,
         ];
        return (
            <div>
                <Dialog
                    title="Create New Note"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={handleClose}
                >
                        Create a new note<br />
                    {/*FORMULARIO !!!  */}
                    <NoteForm onSubmit={handleSubmit} />
                </Dialog>
            </div>
        );
}
}

export default AddModalNote;
// Componente modal para agregar notas.
