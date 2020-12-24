import React, { Component } from 'react';

import './UserOutput.css';

class userOutput extends Component {

    render() {
    return (
        <div className="UserOutput">
    <p>Text: {this.props.match.params.userId}</p>
        </div>
// {this.props.location.search.substring(1)} Mihir's method
        
    );
    }
}

export default userOutput;