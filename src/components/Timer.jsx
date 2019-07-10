import React from 'react';
import formatSecondsToMinutesAndSeconds from '../lib/formatSecondsToMinutesAndSeconds';
import PausePlayButton from './PausePlayButton';
import ResetButton from './ResetButton';
import '../styles/timer.css';

const WORK_TIME = 2;
const BREAK_TIME = 1;

const MODES_TIMES = {
  WORK: WORK_TIME,
  BREAK: BREAK_TIME,
};

const TIME_STEP = 1000;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.setTimer = this.setTimer.bind(this);
    this.stop = this.stop.bind(this);
    this.tick = this.tick.bind(this);
    this.completeSession = this.completeSession.bind(this);
    this.toggleIsPlaying = this.toggleIsPlaying.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      // TODO 1: initialize state
      mode: props.mode, // string
      time: MODES_TIMES.WORK, // int ; it's not THIS.MODE_TIMES because MODE_TIMES isn't in the class Timer
      isPlaying: props.autoPlays //bool

    };
  }

  componentDidMount() {
    const { mode, time } = this.state;
    // TODO 2: set the timer
  }

  componentWillUnmount() {
    // TODO 3: stop the timer
  }

  setTimer(mode, time) {
    // TODO 2.1: set state
    // TODO 2.1: initialize timer
  }

  stop() {
    // TODO 3: set isPlaying to false
    // TODO 3: clear timer
  }

  tick() {
    const { mode, isPlaying, time } = this.state;

    if (isPlaying) {
      this.setState({
        /* TODO 2.2: decrease time's value by one */
      },
      () => {
        if (time === 0) {
          // TODO 2.2: stop timer

          if (mode === 'WORK') {
            //TTODO 2.2: set a new timer in BREAK mode
          }

          if (mode === 'BREAK') {
            // TODO 2.2: call complete session
            // TODO 2.2: set a new timer in WORK mode
          }
        }
      });
    }
  }

  toggleIsPlaying() {
    // TODO 5: Use the previous state to write this more succintly
  }

  reset() {
    // TODO 4: call stop and set a new timer
  }

  completeSession() {
    // TODO 7: call onComplete here
  }


  render() {
    const { mode, time, isPlaying } = this.state;
    // TODO 6: make sure we are showing the right class depending on the mode
    const timerClassName = 'timer-container timer-work';
    return (
      <div className={timerClassName}>
        <div>
          <ResetButton onClick={this.reset} />
        </div>
        {/* TODO 6: change time to be the newly formatted time */}
        <div>{time}</div>
        <div>
          <PausePlayButton isPlaying={isPlaying} onClick={this.toggleIsPlaying} />
        </div>
      </div>
    );
  }
}

export default Timer;
