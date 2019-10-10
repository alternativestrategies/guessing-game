import React from 'react';

const Form = (props) => {
        return (
            <React.Fragment>
            <form onSubmit={props.submitGuess}>
                <input 
                type="text"
                onChange={props.getUserGuess}
                value = {props.userGuess}
                placeholder="Guess"/>

                <button
                type="submit"
                name="submit"
                value="submit">Submit</button>
    
                <button
                
                onClick={props.newGame}>
                New Game
                </button>
                
            </form>
    
            <div className="reset">
            <button 
            type="reset"
            onClick={props.resetChoice}>
            Reset Game Mode
            </button>
            </div>
            </React.Fragment>
        );
    
}

export default Form; 