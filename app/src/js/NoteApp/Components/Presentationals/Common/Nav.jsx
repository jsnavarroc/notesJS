// Dependencies
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import NoteAdd from 'material-ui/svg-icons/action/note-add';

import DialogModal from './DialogModal';

class Nav extends Component {
	state = {
		open: false,
	};
	DialogModalShow () {
		return(<DialogModal open = {true} handleClose = {this.handleClose} />);
	}

	handleClose = () => {
        this.setState({ open: false });
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	addButton = () => {
		const style = {
			margin: 12,
		};
		const { open } = this.state;
		return(
			<RaisedButton
				backgroundColor="#2ECC71"
				icon={<NoteAdd color={fullWhite} />}
				style={style}
				onClick={() => this.handleOpen()}
			>
			{open? this.DialogModalShow(): null}
			</RaisedButton>
		);
	}
	render() {
		const styles = {
			title: {
				cursor: 'pointer',
			},
		};

		return (
				<div >
					<AppBar
						className="scssNav"
						title={<span style={styles.title}>Note JSN</span>}
						iconElementRight={this.addButton()}
					/>
			</div>
		);
	}
}

export default Nav;

