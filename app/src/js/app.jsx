// Dependencies
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Responsive Web
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-flexbox-grid';
import '../scss/index.scss';

// Components Container
import RoutesPage from './RoutesPage';
// Store
import  { store } from './redux/store';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
         return(
            <MuiThemeProvider>
                <Grid>
                    <RoutesPage/>
                </Grid>
            </MuiThemeProvider>
        );
    }
}
const rootComponent = (
    <Provider store = {store}>
        <App />
    </Provider>
);
render(rootComponent, document.getElementById('app'));
