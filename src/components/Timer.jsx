import React from 'react';
import { Card, Col, Icon } from 'antd';

const Timer = ({ timer, onClick }) => (
    <Col span={8}>
        <Card title={timer.name} bordered onClick={() => onClick(timer)} className={timer.isRunning ? 'running' : 'paused'}>
            <div>{timer.time}</div>
            { timer.isRunning
              ? (<div><Icon type="pause-circle" theme="outlined" /> Pause Timer</div>)
              : (<div><Icon type="play-circle" theme="outlined" /> Start Timer </div>)
            }
        </Card>
    </Col>);

export default Timer;
