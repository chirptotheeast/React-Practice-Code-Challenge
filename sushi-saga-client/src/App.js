import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    currentSushi : []
  }


async componentDidMount(){
  const response = await fetch(API)
  const sushiData = await response.json()
  this.setState({sushi: sushiData})
  this.setCurrentSushi(1,4)
  
}

setCurrentSushi = (start,finish) => {
  let fourSushis = this.state.sushi.filter((sushi) => {
    return (sushi.id>= start && sushi.id<=finish)
  })
  this.setState({currentSushi: fourSushis})

}


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.currentSushi} />
        <Table />
      </div>
    );
  }
}

export default App;