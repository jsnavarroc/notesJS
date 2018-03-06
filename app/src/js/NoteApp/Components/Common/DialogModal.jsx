import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class DialogModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
      };

      handleClose = () => {
        this.setState({ open: false });
      };

    render() {
        const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label="Add"
				primary={true}
				keyboardFocused={true}
				onClick={this.handleClose}
			/>,
         ];
        return (
            <div>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                        Create a new note<br />
                    <TextField
                        hintText="Input Text"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                    /><br />
                </Dialog>
            </div>
        );
}
}

export default DialogModal;
