import React from 'react';

export default class Title extends React.Component{

  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>
        <p>
          <b>React</b> é uma biblioteca JavaScript para construção de interfaces de usuário.
        </p>
        <a href={this.props.url} target="_blank">REACT</a>

      </div>
    );

  }
}

