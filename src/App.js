import React, { Component } from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import Rota from './route.js';
import {createGlobalStyle} from 'styled-components';
import Topo from './Header.js';


const GlobalStyle = createGlobalStyle`
body{
  background-color: black
}
`

class App extends Component {
  render(){
    return(
      <Router>
      <GlobalStyle/>
      <Topo/>
      <Rota/>
      </Router>
    )
  }
}

export default App