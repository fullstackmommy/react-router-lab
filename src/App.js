import React, {Component} from 'react';
import MyRouter from './components/MyRouter/MyRouter';
//import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>React Router Lab</h1>
        <MyRouter/>
      </React.Fragment>
    );
  }
}
export default App;