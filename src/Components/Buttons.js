import React from 'react';

const Buttons = (props) => {
    return (
    <div className="main-btns">
         <button 
        onClick={props.standardGame}
        disabled={props.gameChoice === "Standard" || props.gameChoice === '' ? false : true}>
          Standard
        </button>
        <button
        onClick={props.expertGame}
        disabled={props.gameChoice === "Expert" || props.gameChoice === ''? false : true}>
          Expert
        </button>
    </div>

    );
}

export default Buttons;