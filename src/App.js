import React from 'react';
import './App.css';

class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    locations: [
      {name:"Bali",votes:0},
      {name:"London",votes:0},
      {name:"Berlin",votes:0},
      {name:"Belguim",votes:0},
          ],
  };
}
vote(i){
  let newlocations=[...this.state.locations];
  newlocations[i].votes++;
  this.setState({locations:newlocations})
}

render(){
  return(
    <>
    <h1>Vote for destination</h1>
    <div className="locations">
        {this.state.locations.map((loc,i)=>(
          <div key={i} className="location">
          <div className="voteCount">{loc.votes}</div>
          <div className="locationName">{loc.name}</div>
          <button onClick={this.vote.bind(this,i)}>click</button>
          </div>
        ))}
    </div>
    </>
  );
}

}



export default App;
