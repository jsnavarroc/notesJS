// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components Containers
import NoteListContainer from './NoteApp/Components/Containers/NoteListContainer';
import CustomerNoteContainer from './NoteApp/Components/Containers/CustomerNoteContainer';

class RoutesPage extends Component {
  rederNoteList = () => <NoteListContainer/>
  renderNotesContainer= (props) => ( <CustomerNoteContainer idNote={props.match.params.idNote}/>)
  rederError = () => <h1>Error404</h1>

  render() {

    return (
        <Router>
            <Switch>
                <Route exact path = "/" component = {this.rederNoteList}/>
                <Route path = "/note/:idNote" render = {(props) => this.renderNotesContainer(props)}/>
                <Route component = {this.rederError}/>
            </Switch>
        </Router>
    );
  }
}

export default RoutesPage;
