import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends Component {
  onIncrement(e) {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  onDecrement(e) {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.props.counter}</h1>
        <button onClick={this.onIncrement.bind(this)}>increment</button>
        <button onClick={this.onDecrement.bind(this)}>decrement</button>
      </div>
    );
  }
}

export default connect(state => state)(Counter);
