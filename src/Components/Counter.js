import React from 'react'; 
import Display from './Display';

const Counter = (props) => {
    return (
    <div className="center">
        <div className={`counter ${props.gameChoice === "" || props.gameChoice === "Expert" ? "not-here" : "here"}`}>
            <p className="counter-headline">Standard</p>
            <div className="counter-score">
            <p>High Score: {props.standardHighscore}</p>
            <p>Guesses: {props.guesses}</p>
            </div>
            
        </div>

            <Display 
            gameChoice={props.gameChoice}
            message={props.message}
            standardHighscore={props.standardHighscore}
            expertHighscore={props.expertHighscore}
            guesses={props.guesses}/>

        <div className={`counter ${props.gameChoice === "" || props.gameChoice === "Standard" ? "not-here" : "here"}`} >   
            <p className="counter-headline">Expert</p>
            <div className="counter-score">
            <p>High Score: {props.expertHighscore}</p>
            <p>Guesses: {props.guesses}</p>
            </div>
        
        </div>
        
    </div>
    );
}
export default Counter;