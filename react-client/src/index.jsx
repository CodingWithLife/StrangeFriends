import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Home from './components/Home.js';

class App extends React.Component {

  render () {
    return (
      <div>
      <Home />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
