import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import axios from 'axios'
import RepoOutput from './RepoOutput/RepoOutput';

class App extends Component {
  state = { 
cid:'97de3f8c1478addb1aea',
csecret:'b839c366a99ec612299176f08c3a1615157b5748',
ToUpdate: false,
userin: '',
profileData: '',
repoData: null,
repos_count : 5,
repos_sort : 'created: asc'
  }

inputHnadler=(e)=>{
  this.setState({userin: e.target.value});
console.log(this.state.userin);
}

clickedHandler=(e)=>{
  this.setState({ ToUpdate: true });
}

componentDidUpdate() {
  if (this.state.ToUpdate) {
    axios.get(`https://api.github.com/users/${this.state.userin}?client_id=${this.state.cid}&client_secret=${this.state.csecret}`)
    .then(response=>{
      console.log(response);
      this.setState({profileData:response.data});
    })
    axios.get(`https://api.github.com/users/${this.state.userin}/repos?per_page=${this.state.repos_count}&sort=${this.state.repos_sort}&client_id=${this.state.cid}&client_secret=${this.state.csecret}`)
    .then(response=>{
      console.log(response);
      this.setState({repoData:{...response}});
    })
    this.setState({ ToUpdate: false });
  }}


  render() {
    return (
      <div className="App">
        <UserInput changed={this.inputHnadler} clicked={this.clickedHandler}/>
        <UserOutput userName={this.state.profileData.login} userid={this.state.profileData.id} userimage={this.state.profileData.avatar_url}/>
        <RepoOutput repos={this.state.repoData} />
      </div>
    );
  }
}

export default App;
