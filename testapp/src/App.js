import React, { Component } from 'react';
import CountryList from './CountryList';
import Footer from './Footer';

import styles from "./styles";
class App extends Component {
  constructor(){
    super();
    this.state = {
      msg : "World",
      data : {title: '해야할 일 목록'},
      list : [
            { no:1, country: '일본', visited: false},
            { no:2, country: '인도', visited: false},
            { no:3, country: '태국', visited: true},
            { no:4, country: '피지', visited: false}
      ]
    }
  }
  createString(x, y) {
    return (
      <div className="well">{x} + {y} = {x+y}</div>
    )
  }
  render() {
    return (
      <div className="container">
        <h1>Hello! {this.state.msg}</h1>
        <hr style={styles.dashStyle}/>
        {this.createString(4, 5)}
        <CountryList countries={this.state.list}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
