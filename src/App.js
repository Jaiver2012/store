import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameList from './Components/GameList';
import { render } from '@testing-library/react';
import GameForm from './Components/GameForm';

class App extends Component{

constructor(){
 super();
  this.state={
    gameEdit:{id:"",name:"", type:"",price:""},
    owner:"Jaiver",
    games:[
      {id:1,name:"Super Mario Bross",type:"Acade",price:"3000"},
      {id:2,name:"Call of Duty",type:"FPS",price:"2000"},
      {id:3,name:"Celeste",type:"Platadormero",price:"45000"},
    ]
  }
}

handleAddGame(game){
  let games = this.state.games;
  games.push(game);
  this.setState({
    games: games
  })
}


handleOnEdit(game){

  console.log(game)
  this.setState({
   gameEdit:game
  })
}

render(){
  return (
    <div className="App">
      <GameList owner={this.state.owner} games={this.state.games} onEdit={this.handleOnEdit.bind(this)}/>
      <GameForm onSubmit={this.handleAddGame.bind(this)} game={this.state.gameEdit}/>
    </div>
  );
}
}
  

export default App;
