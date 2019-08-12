import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>
                <span 
                className={props.gameChoice === "" ? "blink" : null}>
                {props.gameChoice === "" ? "Start Game" : "Guess Game"}
                </span>
            </h1>
            <p>Press Standard or Expert to begin</p>
        </header>
    );
}

export default Header;