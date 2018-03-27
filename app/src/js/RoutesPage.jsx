// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components Containers
import NoteListContainer from './NoteApp/Components/Containers/NoteListContainer';
import EditNoteContainer from './NoteApp/Components/Containers/editNoteContainer';
import DeleteNoteContainer from './NoteApp/Components/Containers/DeleteNoteContainer';

class RoutesPage extends Component {
  rederNoteList = () => <NoteListContainer/>
   renderNotesContainer= (props) => ( <EditNoteContainer idNote={props.match.params.userId}/>)
   renderNoteDeleteContainer = () => (<DeleteNoteContainer/>)
  rederError = () => <h1>Error404</h1>

  render() {

    return (
        <Router>
            <Switch>
                <Route exact path = "/" component = {this.rederNoteList}/>
                <Route path = "/note/edit/:idNote" render = {(props) => this.renderNotesContainer(props)}/>
                <Route path = "/note/delete/:idNote" component = {this.renderNoteDeleteContainer}/>
                <Route component = {this.rederError}/>
            </Switch>
        </Router>
    );
  }
}

export default RoutesPage;
