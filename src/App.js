import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter/index';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props, 'from render');
    return (
      <div className="App">
        <div className="App-view">
          <Counter 
              count={this.props.count}
              add={this.props.onButtonClickAdd}
              remove={this.props.onButtonClickRemove}
              reset={this.props.onButtonClickReset}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClickAdd: () => {
      console.log("increment button clicked");
      const action = {
        type: 'INCREMENT'
      };
      dispatch(action);
    },
    onButtonClickRemove: () => {
      console.log("decrement button clicked");
      const action = {
        type: 'DECREMENT'
      };
      dispatch(action);
    },
    onButtonClickReset: () => {
      console.log("reset button clicked");
      const action = {
        type: 'RESET'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
