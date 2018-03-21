// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Components Containers
import NoteListContainer from './NoteApp/Components/Containers/NoteListContainer';

class RoutesPage extends Component {
  rederNoteList = () => <NoteListContainer/>
  renderCustomersContainer = () => <div><h1>Customers Container</h1></div>
  renderCustomerNewContainer = () => (  <div className = "scssShadow" style = {{  background: 'white' }}><Link to ="/"><h1>Customer New Container</h1></Link></div>)
  rederError = () => <h1>Error404</h1>

  render() {

    return (
        <Router>
            <Switch>
                <Route exact path = "/" component = {this.rederNoteList}/>
                <Route path = "/customers/:dni" component = {this.renderCustomersContainer}/>
                <Route path = "/note/new" component = {this.renderCustomerNewContainer}/>
                <Route component = {this.rederError}/>
            </Switch>
        </Router>
    );
  }
}

export default RoutesPage;
