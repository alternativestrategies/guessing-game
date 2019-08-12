import React, { Component } from 'react';
import Header from './Header';
import Counter from './Counter';
import Buttons from './Buttons';

import Form from './Form';


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

  standardNum = () => (Math.floor(Math.random()*10 + 1));
  expertNum = () => (Math.floor(Math.random()*100 + 1));

  //gets users guess
  getUserGuess = (e) => {
    this.setState({
      userGuess: e.target.value
    }, ()=> console.log(this.state.userGuess))
  }

  // starts game based on user choice
  standardGame = (e) => {
    e.preventDefault();
    let answer = this.standardNum();

    this.setState({
      randomNum: answer,
      gameChoice: "Standard"
    }, ()=> console.log(this.state.randomNum))
  }

  expertGame = (e) => {
    e.preventDefault();
    let answer = this.expertNum();

    this.setState({
      randomNum: answer,
      gameChoice: "Expert"
    }, ()=> console.log(this.state.randomNum))
  }


  //compares and gives feedback
submitGuess = (e) => {
  e.preventDefault();
  let userGuess = parseInt(this.state.userGuess);
  let mode = this.state.gameChoice;

  let standardHS = this.state.standardHighscore;
  let expertHS = this.state.expertHighscore;

  let guessAmount = this.state.guesses + 1;
  let guessliteral = this.state.guesses;
  let answer = this.state.randomNum;
  let countMessage = `Only took you ${guessAmount} ${guessAmount === 1 ? "try" : "tries"}`
   
  if(mode === "Standard") {
    if( userGuess < answer ) { 
      this.setState({
          ...this.state,
          message: "Try a bigger number",
          guesses: guessAmount,
          userGuess: ''
      });
    } if ( userGuess > answer){
        this.setState({
            ...this.state,
            message: "Try a smaller number",
            guesses: guessAmount,
            userGuess: ''
        });
    } 

    if(userGuess === answer) {
        if(standardHS !== 0 && guessliteral< standardHS ){
            this.setState({
                ...this.state,
                standardHighscore: guessAmount,
                guesses: guessAmount,
                message: `Congrats! you beat your high score. ${countMessage}`,
                userGuess: ''
            });
        } 
        if(standardHS === 0) {
            this.setState({
                ...this.state,
                standardHighscore: guessAmount,
                guesses: guessAmount,
                message: `You're right! ${countMessage}`,
                userGuess: ''
            })
        }
        if(standardHS !== 0 && guessAmount > standardHS){
            this.setState({
                ...this.state,
                guesses: guessAmount,
                message: `You're right! ${countMessage}`,
                userGuess: ''
            });
        }
    }

    }
    if(mode === "Expert") {
      if( userGuess < answer ) { 
        this.setState({
            ...this.state,
            message: "Try a bigger number",
            guesses: guessAmount,
            userGuess: ''
        });
    } if ( userGuess > answer){
        this.setState({
            ...this.state,
            message: "Try a smaller number",
            guesses: guessAmount,
            userGuess: ''
        });
    } 

    if(userGuess === answer) {
        if(expertHS !== 0 && guessliteral< expertHS ){
            this.setState({
                ...this.state,
                expertHighscore: guessAmount,
                guesses: guessAmount,
                message: `Congrats! you beat your high score. ${countMessage}`,
                userGuess: ''
            });
        } 
        if(expertHS === 0) {
            this.setState({
                ...this.state,
                expertHighscore: guessAmount,
                guesses: guessAmount,
                message: `You're right! ${countMessage}`,
                userGuess: ''
            })
        }
        if(expertHS !== 0 && guessAmount > expertHS){
            this.setState({
                ...this.state,
                guesses: guessAmount,
                message: `You're right! ${countMessage}`,
                userGuess: ''
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
        randomNum: this.standardNum()
      }, ()=> console.log(this.state.randomNum) )
    }
    if(mode === "Expert"){
      this.setState({
        ...initialState,
        gameChoice: "Expert",
        randomNum: this.expertNum()
      }, ()=> console.log(this.state.randomNum) )
    }
  }


  render () {
    return (
      <React.Fragment >
        <Header 
        gameChoice={this.state.gameChoice}/>

        <Buttons 
        standardGame={this.standardGame}
        expertGame={this.expertGame}
        gameChoice={this.state.gameChoice}/>

      <div className={this.state.gameChoice===""? "not-here" : "here"}>
        <Counter 
        gameChoice={this.state.gameChoice}
        guesses={this.state.guesses}
        standardHighscore={this.state.standardHighscore}
        expertHighscore={this.state.expertHighscore}
        message={this.state.message}
      />


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
