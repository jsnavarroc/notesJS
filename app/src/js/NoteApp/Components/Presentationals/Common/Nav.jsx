// Dependencies
import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter } from 'react-router-dom';

const styles = {
	title: {
		cursor: 'pointer',
	},
};

const returnHome = (history, location) => {
	(location!=='/')?  history.push('/'): null;
};
const Nav = ({ history, location, notes, addNote }) => {
    return (
        <div>
				<AppBar
				className="scssNav"
				title={<span  style={styles.title} onClick={() => returnHome(history, location.pathname)}>Note JSN</span>}
				iconElementRight={addNote? addNote(notes): null}
				/>
        </div>
    );
};

export default withRouter(Nav);

