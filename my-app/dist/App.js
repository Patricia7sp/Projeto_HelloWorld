import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './Component/Title';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  increase() {
    this.setState((prevstate)=>{

      if(prevstate.counter <10) {
        return{
          counter: prevstate.counter + 1
         }

      }
      
    })

  }
   

  reduce() {
    this.setState((prevstate)=>{

      if(prevstate.counter >0){
        return{
          counter: prevstate.counter -1
         }

      }
      
      
    })

  }


  restart (){
    this.setState({
      counter: this.state.counter = 0
    })
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title="Hello World!" description="Aprendendo React em 2020" url="https://pt-br.reactjs.org/docs/getting-started.html" />
        <h2>Click nas opcoes abaixo!</h2>
        <h1>{this.state.counter}</h1>
        <button onClick={() => { this.increase() }}>Aumentar </button> 
        <button onClick={() => { this.reduce() }}>Reduzir </button> 
        <button onClick={() => { this.restart() }}>Reiniciar</button>
            
      </div>
    );
  }
}

export default App;
