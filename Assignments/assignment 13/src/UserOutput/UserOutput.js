import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    let image= props.userimage;
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>User ID: {props.userid}</p>
            <img src= {props.userimage}/>
        </div>
    );
};

export default userOutput;