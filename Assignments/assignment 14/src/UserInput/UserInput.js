import React, { Component } from 'react';
import UserOutput from '../UserOutput/UserOutput'
import {Link, Route} from 'react-router-dom';
class userInput extends Component {
    state = { 
        userin: ''
          }
        
        inputHnadler=(e)=>{
          this.setState({userin: e.target.value});
        }

render(){
    return (
        <div>
  <input type="text" onChange={this.inputHnadler} 
        />
    <Link key={this.state.userin} to={'output/' + this.state.userin }>
        <button>GO</button>
    </Link>

     <Route path={'output/:userId'} component={UserOutput} />
        </div>)
        ;
        }
}

export default userInput;