// Dependencies
import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-flexbox-grid';
import '../scss/index.scss';

// Components
import NoteApp from './NoteApp';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
         return(
            <MuiThemeProvider>
                <Grid>
                    <NoteApp/>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

render(<App />, document.getElementById('app'));
