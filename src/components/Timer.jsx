import React, { Component } from 'react';
import {
  Popconfirm, Card, Col, Icon,
} from 'antd';
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

    // while one timer is running, the user could start another timer
    // in such a case, the previously running timer should be stopped
    componentDidUpdate({ timer }) { // timer = oldTimer
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
      const { timer, onClick, onDelete } = this.props;
      const { time } = this.state;
      return (
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card className={timer.isRunning ? 'running' : 'paused'}>
                  <div className="timer-title">{timer.name}</div>

                  <div onClick={() => { this.toggleRunner(timer); onClick(timer); }} className="timer-body">
                      <div className="time-counter">{hhMMss(time)}</div>
                      <div className="timer-btn">
                          { timer.isRunning
                            ? (<div><Icon type="pause-circle" theme="outlined" /> Pause Timer</div>)
                            : (<div><Icon type="play-circle" theme="outlined" /> Start Timer </div>)
                            }
                      </div>
                  </div>
              </Card>

              <div className="delete-timer">
                  <Popconfirm title="Are you sure?" onConfirm={() => onDelete(timer)} okText="Yes" cancelText="No">
                      <Icon type="close-circle" theme="outlined" />
                  </Popconfirm>
              </div>
          </Col>);
    }
}

export default Timer;
