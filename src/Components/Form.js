import React, {Component} from 'react';

class Form extends Component {
    
    render (){
        return (
            <React.Fragment>
            <form onSubmit={this.props.submitGuess}>
                <input 
                type="text"
                onChange={this.props.getUserGuess}
                value = {this.props.userGuess}
                placeholder="Guess"/>

                <button
                type="submit"
                name="submit"
                value="submit">Submit</button>
    
                <button
                
                onClick={this.props.newGame}>
                New Game
                </button>
                
            </form>
    
            <div className="reset">
            <button 
            type="reset"
            onClick={this.props.resetChoice}>
            Reset Game Mode
            </button>
            </div>
            </React.Fragment>
        );
    }
}

export default Form; 