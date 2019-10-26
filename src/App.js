import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matchcards.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on an image to earn points, but don't click on any more than once!";

class App extends Component {
  state = {
    matches,
    correctGuesses,
    bestScore,
    clickMessage
  };

  setClicked = id => {
    // Make a copy of the state matches array to work with
    const matches = this.state.matches;

    // filter the click match
    const clickedMatch = matches.filter(match => match.id === id);

    // If the matched image's cicked value is already true,
    // do the game over actions

    if (clickedMatch[0].clicked) {
      // console.log(`Correct guesses: ${correctGuesses}`);
      // console.log(`Best Score: ${bestScore}`);

      correctGuesses = 0;
      clickMessage = "You've guessed incorrectly!!";

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ matches });
      //Otherwise, if clicked = false, the user hasn't finished
    } else if (correctGuesses < 11) {
      //set its value to true
      clickedMatch[0].clicked = true;

      //increment the appropriate counter
      correctGuesses++;

      clickMessage = "You've guessed correctly!!";

      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
        this.setState({ bestScore });
      }

      //shuffle the array to be rendered in a random order
      matches.sort((a, b) => {
        return 0.5 - Math.random();
      });

      //Set this.state.matches equal to the new matches array
      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    } else {
      //Set its value to true
      clickedMatch[0].clicked = true;

      //restart the guess counter
      correctGuesses = 0;

      //user can paly again
      clickMessage = "You've won the game. Let's see if you can do it again!!";
      bestScore = 12;
      this.setState({ bestScore });

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      // Shuffle the array to be rendered in a random order
      matches.sort((a, b) => {
        return 0.5 - Math.random();
      });

      //Set this.state.matches equal to the new matches array
      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    }
  };

  render() {
    return (
      <Wrapper>
        <Title> Clicky Game!</Title>
        <h3 className="scoreSummary">{this.state.clickMessage}</h3>

        <h3 className="scoreSummary card-header">
          Correct Guesses: {this.state.correctGuesses} <br />
          Best Score: {this.state.bestScore}
        </h3>
        <div className="container">
          <div className="row">
            {this.state.matches.map(match => (
              <MatchCard
                setClicked={this.setClicked}
                key={match.id}
                id={match.id}
                image={match.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
