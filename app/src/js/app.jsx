// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components Containers
import HomeContainer from './NoteApp/Components/Containers/HomeContainer';
import NoteListContainer from './NoteApp/Components/Containers/NoteListContainer';
import CustomerNoteContainer from './NoteApp/Components/Containers/CustomerNoteContainer';

class App extends Component {
  rederHome = () => <HomeContainer/>
  rederNoteList = () => <NoteListContainer/>
  renderNotesContainer= (props) => ( <CustomerNoteContainer id={props.match.params.id}/>)
  rederError = () => <h1>Error404</h1>

  render() {

    return (
        <Router>
            <Switch>
                <Route exact path = "/home" component = {this.rederHome}/>
                <Route exact path = "/" component = {this.rederNoteList}/>
                <Route path = "/note/:id" render = {(props) => this.renderNotesContainer(props)}/>
                <Route component = {this.rederError}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
