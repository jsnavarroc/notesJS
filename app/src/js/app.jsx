// Dependencies
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style/index.scss';

// Components
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';


class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
         return(        
            <div>
                <h1>Hello World</h1>
                <ComponentA />
                <ComponentB />
            </div>         
        )
    }
}

render(<App />, document.getElementById('app'));