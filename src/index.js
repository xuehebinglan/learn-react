import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MouseTracker from './mouseTracker.js'
import Game from './game.js'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Game />
        <MouseTracker />
      </div>
    )
  }
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);