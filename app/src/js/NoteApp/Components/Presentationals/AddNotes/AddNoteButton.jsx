import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import NoteAdd from 'material-ui/svg-icons/action/note-add';

import AddModalNote from './AddModalNote';

class AddNoteButton extends Component {
    state = {
		open: false,
	};
	DialogModalShow () {
		return(<AddModalNote open = {true} handleClose = {this.handleClose} />);
	}

	handleClose = () => {
        this.setState({ open: false });
	};

	handleOpen = () => {
		this.setState({ open: true });
	};
    render() {
        const style = {
			margin: 12,
		};
		const { open } = this.state;
        return (
            <RaisedButton
            backgroundColor="#2ECC71"
            icon={<NoteAdd color={fullWhite}/>}
            style={style}
            onClick={() => this.handleOpen()}
            >
            {open? this.DialogModalShow(): null}
            </RaisedButton>
        );
    }
}

export default AddNoteButton;
// Componente boton par agregar notas desde el nav.
