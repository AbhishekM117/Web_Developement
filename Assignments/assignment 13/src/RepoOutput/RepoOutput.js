import React from 'react';
import classes from './RepoOutput.css'


const RepoOutput = (props) => {

  let out;
  if (props.repos !== null) {
      console.log(props.repos)
    out = props.repos.data.map((el) => {
       return(
           <div  className="RepoOutput"> 
               <h3>{el.name}</h3>
             <p> {el.description === null ? "Descripion is Empty": el.description} </p>
             <p>Stars: {el.stargazers_count}</p>
            <p>Watchers: {el.watchers_count}</p>
            <p>Forks: {el.forms_count}</p>
        </div>
        );
    })
} else {
    out = <p></p>;
  }
  return out;
};

export default RepoOutput;