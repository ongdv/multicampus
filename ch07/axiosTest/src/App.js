import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
}

componentDidMount () {
  axios.post('http://localhost:3001/contacts',
    {name: "홍길동", tel: "010-2221-4545", address: "서울시 영등포구"})
    .then((response) => {
      if(response.data.status !== "success"){
        throw new Error("데이터 추가 실패!!");
      }
      return axios.get('http://localhost:3001/contacts/' + response.data.no)
    })
    .then((response) => {
      console.log("## 새로운 연락처 추가 후 조회");
      console.log(response.data);
    })
    .catch((error) => {
      console.log("오류 발생: " + error);
    });
}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <xmp>
          {this.state.data}
         </xmp>
      </div>
    );
  }
}

export default App;
