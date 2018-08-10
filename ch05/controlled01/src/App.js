import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 100,
      y: 200
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    
  }
  
  change = (e) => {
    let newValue = Number(e.target.value);
    if(e.target.id === "x"){
      this.setState({x: newValue});
    }else{
      this.setState({y: newValue});
    }
  }

  render() {
    return (
      <div>
        <p>
          <label htmlFor="x">x: </label>
          <input type="text" id="x" value={this.state.x}
          onChange={this.change}/>
        </p>  
        <p>
          <label htmlFor="y">y: </label>
          <input type="text" id="y" value={this.state.y}
          onChange={this.change}/>
        </p>  
        <p>
          result : {this.state.x + this.state.y}
        </p>
      </div>
    );
  }
}

export default App;