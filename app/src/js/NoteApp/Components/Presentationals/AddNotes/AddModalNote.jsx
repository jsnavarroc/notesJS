import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class AddModalNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
        };
    }

    render() {
        const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.props.handleClose}
			/>,
			<FlatButton
				label="Add"
				primary={true}
				keyboardFocused={true}
				onClick={this.props.handleClose}
			/>,
         ];
        return (
            <div>
                <Dialog
                    title="Create New Note"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.props.handleClose}
                >
                        Create a new note<br />
                    {/*FORMULARIO !!!  */}
                    <TextField
                        hintText="Input Text"
                        errorText="This field is required."
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                    /><br />

                </Dialog>
            </div>
        );
}
}

export default AddModalNote;
// Componente modal para agregar notas.
