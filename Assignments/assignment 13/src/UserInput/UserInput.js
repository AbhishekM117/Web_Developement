import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return (
        <div>
    <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />
     <button onClick={props.clicked}>Search</button>   
        </div>);
};

export default userInput;