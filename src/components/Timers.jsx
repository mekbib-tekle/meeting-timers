import React, { Component } from 'react';
import { Row } from 'antd';
import AddTimer from './AddTimer';
import Timer from './Timer';
import EmptyTimer from './EmptyTimer';

class Timers extends Component {
    state = {
      _timers: [],
      timers: [{
        name: 'Homer Simpson',
        time: 0,
        isRunning: false,
      }, {
        name: 'Bart Simpson',
        time: 0,
        isRunning: false,
      }, {
        name: 'Milhouse Van houtten',
        time: 0,
        isRunning: false,
      }, {
        name: 'Carl Carlson',
        time: 0,
        isRunning: false,
      }, {
        name: 'Krusty theKlown',
        time: 0,
        isRunning: false,
      }],
    }

    sortByName = (a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    };

    onSubmit = (timer) => {
      const { timers } = this.state;
      this.setState({
        timers: [...timers, timer],
      });
    }

    activateTimer = (timer) => {
      const { timers } = this.state;

      let _timers = timers.filter(t => t.name !== timer.name);
      if (!timer.isRunning) {
        _timers = _timers.map(t => ({ ...t, isRunning: timer.isRunning }));
      }

      this.setState({
        timers: [..._timers, { name: timer.name, time: timer.time, isRunning: !timer.isRunning }],
      });
    }

    render() {
      const { timers } = this.state;
      return (
          <div>
              <h1>Meeting Chess Timers</h1>

              <Row gutter={16}><AddTimer onSubmit={this.onSubmit} /></Row>

              <div>
                  <Row gutter={16}>
                      {timers && timers.length
                        ? timers.sort(this.sortByName).map(timer => (
                            <Timer timer={timer} key={timer.name} onClick={_timer => this.activateTimer(_timer)} />)
                        )
                        : <EmptyTimer />}
                  </Row>
              </div>
          </div>
      );
    }
}

export default Timers;
