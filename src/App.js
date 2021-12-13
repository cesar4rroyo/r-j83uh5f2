import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      contador : 0,
    }
  }

  handleChange = (event) => {
    const text = event.target.value;
    console.log(text.length);
    console.log(text);
    this.setState({
      contador : text.length
    })
  }

    
  render() {
    return (
      <div className="container">
        <textarea onChange={(e)=>this.handleChange(e)} rows="3"></textarea>
        <div className="counter">{this.state.contador}</div>
      </div>
    );
  }
}

export default App;
