import React, { Component } from 'react';
import { Card, Col, Icon } from 'antd';
import { hhMMss } from '../utils';

class Timer extends Component {
  constructor() {
    super();
    const interval = null;
  }

    state = {
      time: 0,
    }

    componentWillMount() {
      const { timer } = this.props;
      const { time } = timer;
      this.setState({ time });
    }

    componentDidUpdate({ timer }) {
      if (timer.isRunning && !this.props.timer.isRunning) {
        clearInterval(this.interval);
      }
    }

    toggleRunner = (timer) => {
      // if timer is running, pause it
      if (timer.isRunning) {
        clearInterval(this.interval);
        return;
      }

      // if timer is not running, start running it
      this.interval = setInterval(() => {
        const { time } = this.state;
        this.setState({ time: (parseInt(time, 10) + 1) });
      }, 1000);
    }

    render() {
      const { timer, onClick } = this.props;
      const { time } = this.state;
      return (
          <Col span={8}>
              <Card title={timer.name} bordered onClick={() => { this.toggleRunner(timer); onClick(timer); }} className={timer.isRunning ? 'running' : 'paused'}>
                  <div>{hhMMss(time)}</div>
                  { timer.isRunning
                    ? (<div><Icon type="pause-circle" theme="outlined" /> Pause Timer</div>)
                    : (<div><Icon type="play-circle" theme="outlined" /> Start Timer </div>)
            }
              </Card>
          </Col>);
    }
}

export default Timer;
