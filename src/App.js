import React, { Component } from 'react';
import Timers from './components/Timers';

import './styles/App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Timers />
        </div>
    );
  }
}

export default App;
