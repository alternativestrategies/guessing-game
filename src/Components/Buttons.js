import React from 'react';

const Buttons = (props) => {
    return (
    <div className="main-btns">
         <button 
        onClick={(e) => props.handleGameChoice('Standard', e)}
        disabled={props.gameChoice === "Standard" || props.gameChoice === '' ? false : true}>
          Standard
        </button>
        <button
        onClick={(e) => props.handleGameChoice('Expert', e)}
        disabled={props.gameChoice === "Expert" || props.gameChoice === ''? false : true}>
          Expert
        </button>
    </div>

    );
}

export default Buttons;