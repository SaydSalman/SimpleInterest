import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    incrementCount(){
        this.setState({count:this.state.count+1})
    }
    decrementCount(){
        this.setState({count:this.state.count-1})
    }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p className='text-white'>Current Count : {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    )
  }
}
