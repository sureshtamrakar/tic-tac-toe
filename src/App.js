<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';


class App extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       turn:'Y',
      winner:undefined,
       gameEnded:false
      }
      this.gameState = {
        board: Array(9).fill(''),
        totalMoves:0

      }
  }
  
  clicked(event){

    if(this.gameState.board[event.target.dataset.square] ==''){

    this.gameState.board[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn == 'X' ? 'O' : 'O',
      })
    }


    var result = this.checkWinner();
    if(result=='X'){
      this.setState({
        gameEnded:true,
        winner:'X',
        winnerLine:'Match is X'

      })
      console.log('Winner');

    }
    else if(result=='O'){
      this.setState({
        gameEnded:true,
        winner:'O',
        winnerLine:'Match is O'

      });
    }
        else if(result==9){
          this.setState({
            gameEnded:true,
            winner:'Draw',
            winnerLine:'Match is Drawn'
          });
        }


    

  }

  checkWinner(){

    
      var moves = [[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]]
     var board = this.gameState.board;
      for(let i=0;i<moves.length;i++){
        if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]])
          return board[moves[i][0]];
    }
      
    if(this.gameState.totalMoves==9){
      return 'Draw';
    }


    }

  render(){
  return (
    <div id="game">
      <div id="status">
        {this.state.winnerLine}
      </div>
      <div id="head">
        Tic Tac Toe
      </div>
      <div id="board" onClick={(e)=>this.clicked(e)}>
        <div className="square"data-square="0"></div>
        <div className="square"data-square="1"></div>
        <div className="square"data-square="2"></div>
        <div className="square"data-square="3"></div>
        <div className="square"data-square="4"></div>
        <div className="square"data-square="5"></div>
        <div className="square"data-square="6"></div>
        <div className="square"data-square="7"></div>
        <div className="square"data-square="8"></div>
      </div>
    </div>
  );
}
}

export default App;
=======
>>>>>>> d6aea260ccc1f5016bde925bfc4bee5080340ed2
