import React from 'react';


const Display = (props) => {
    return (
        <div className="display">
                <div className="display-rules">
                    <p className="display-rules-headline">Rules:</p> 
                    <p>{props.gameChoice === "" ? null : props.gameChoice === "Standard" ? "Choose number from 1 to 10":"Choose number from 1 to 100"}</p>
                </div>        
            <p className="display-message">{props.message === "" ? "..." : props.message}</p>
        </div>
    );
}

export default Display;