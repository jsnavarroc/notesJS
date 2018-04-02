import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

// Responsive Web
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-flexbox-grid';
import '../scss/index.scss';

// Store
import  { store } from './redux/store';

const rootComponent = (
    <Provider store = {store}>
        <MuiThemeProvider>
            <Grid>
                <App/>
            </Grid>
        </MuiThemeProvider>
    </Provider>
);
ReactDOM.render(rootComponent, document.getElementById('root'));
