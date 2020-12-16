import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: []
  }

async componentDidMount(){
  const response = await fetch(API)
  const sushiData = await response.json()
  this.setState({sushi: sushiData})
  //console.log(sushiData)
}

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushi} />
        <Table />
      </div>
    );
  }
}

export default App;