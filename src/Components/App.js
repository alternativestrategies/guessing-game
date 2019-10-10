import React, { Component } from 'react';
import Header from './Header';
import Counter from './Counter';
import Buttons from './Buttons';

import Form from './Form';

// initial state for the game, inserted into state using spread operator
const initialState = {
  userGuess: '',
  message: '',
  guesses: 0,
  randomNum: 0,
  gameChoice : ""
}

class App extends Component {
  state = {
    ...initialState,
    expertHighscore: 0,
    standardHighscore: 0,
  }

  // function to handle randomNum
  handleRandomNum = (choice) => {
    if(choice === 'Standard'){
      return Math.floor(Math.random()*10 + 1);
    } 
    if(choice === 'Expert') {
      return Math.floor(Math.random()*100 + 1);
    }
  }

  //gets users guess
  getUserGuess = (e) => {
    this.setState({
      userGuess: e.target.value
    })
  }

  // starts game based on user choice and generates random number
  handleGameChoice = (choice, e) => {
    e.preventDefault();
    let answer = this.handleRandomNum(choice);

    this.setState({
      randomNum: answer,
      gameChoice: choice
    })
  }

  //compares and gives feedback
submitGuess = (e) => {
  e.preventDefault();
  let userGuess = parseInt(this.state.userGuess);
  let mode = this.state.gameChoice;
  let guesses = this.state.guesses + 1;
  let answer = this.state.randomNum;

  let highscore;

  if(mode === 'Standard'){
    highscore = this.state.standardHighscore
  } else {
    highscore = this.state.expertHighscore
  }

  let countMessage = `Only took you ${guesses} ${(guesses) === 1 ? "try" : "tries"}!`
  //you need an if statement that compares user guess to computer answer
  //if the user guess is less or greater than answer give the user feedback
  if(mode === 'Standard'){
    this.setState({
      ...this.state,
      guesses: guesses,
      userGuess: ''
    })
    if(userGuess < answer){
      this.setState({
        message: "Try a bigger number",
      });
    }
    if(userGuess > answer){
      this.setState({
        message: "Try a smaller number",
      });
    }
    //if the user guess is equal to the answer tell them they've won
    //if this is their first game its their high score
    if(userGuess === answer){
      let num = this.handleRandomNum("Standard")
      this.setState({
        randomNum: num,
        guesses: 0
      })
      if(highscore === 0){
        this.setState({
          standardHighscore: guesses,
          message: `You're right ${countMessage}`,
        });
      }
      //else if its not their first game and they got a higher score than previous high score they've beat their high score
      if(highscore !== 0 && guesses < highscore ){
        this.setState({
          standardHighscore : guesses,
          message: `You beat your high score`,
        });
      }
      if(highscore === guesses || guesses > highscore){
        this.setState({
          message: `You're right ${countMessage}`,
        });
      }
    }
  }

  //you need an if statement that compares user guess to computer answer
  //if the user guess is less or greater than answer give the user feedback
  if(mode === 'Expert'){
    this.setState({
      ...this.state,
      guesses: guesses,
      userGuess: ''
    })
    if(userGuess < answer){
      this.setState({
        message: "Try a bigger number",
      });
    }
    if(userGuess > answer){
      this.setState({
        message: "Try a smaller number",
      });
    }
    //if the user guess is equal to the answer tell them they've won
    //if this is their first game its their high score
    if(userGuess === answer){
      let num = this.handleRandomNum("Expert")
      this.setState({
        randomNum: num,
        guesses: 0
      })
      if(highscore === 0){
        this.setState({
          expertHighscore: guesses,
          message: `You're right ${countMessage}`,
        });
      }
      //else if its not their first game and they got a higher score than previous high score they've beat their high score
      if(highscore !== 0 && guesses < highscore ){
        this.setState({
          expertHighscore : guesses,
          message: `You beat your high score`,
        });
      }
      if(highscore === guesses || guesses > highscore){
        this.setState({
          message: `You're right ${countMessage}`,
        });
      }
    }
  }
}

  // resets user choice
  resetChoice = (e) => {
    e.preventDefault();
    this.setState({
      ...initialState})
  }
  
  // new game
    newGame = (e) => {
    e.preventDefault();
    let mode = this.state.gameChoice;

    if(mode === "Standard"){
      this.setState({
        ...initialState,
        gameChoice: "Standard",
        randomNum: this.handleRandomNum('Standard')
      })
    }
    if(mode === "Expert"){
      this.setState({
        ...initialState,
        gameChoice: "Expert",
        randomNum: this.handleRandomNum('Expert')
      })
    }
  }


  render () {
    return (
      <React.Fragment >
        <Header 
        gameChoice={this.state.gameChoice}/>

        <Buttons 
        handleGameChoice={this.handleGameChoice}
        gameChoice={this.state.gameChoice}/>

      <div className={this.state.gameChoice===""? "not-here" : "here"}>
        <Counter 
        gameChoice={this.state.gameChoice}
        guesses={this.state.guesses}
        standardHighscore={this.state.standardHighscore}
        expertHighscore={this.state.expertHighscore}
        message={this.state.message}/>

        <Form 
        userGuess={this.state.userGuess}
        myValue={this.state.myValue}
        clearInput={this.clearInput}
        getUserGuess={this.getUserGuess}
        submitGuess={this.submitGuess}
        newGame={this.newGame}
        resetChoice={this.resetChoice}/>
      </div>

</React.Fragment>


    );
  }
}

export default App;
