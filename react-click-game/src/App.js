import React, { Component } from 'react';
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import matches from "./matchcards.json.js";
import './App.css';

class App extends Component {
  state = {  };


  render() { 
    return ( 
      <Wrapper>
        <Title> Clicky Game!</Title>
      <MatchCard />
      </Wrapper>
    
     );
  }
}
 
export default App;