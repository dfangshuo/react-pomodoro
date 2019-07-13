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
    this.setTimer(mode, time);
  }

  componentWillUnmount() {
    // TODO 3: stop the timer
  }

  setTimer(mode, time) {
    // TODO 2.1: set state
    this.setState({
      mode: mode,
      time: time,
    });
    // TODO 2.1: initialize timer
    this.timerID = setInterval(this.tick, TIME_STEP);
  }

  stop() {
    // TODO 3: set isPlaying to false
    this.setState({
      isPlaying: false
    })
    // TODO 3: clear timer
    clearInterval(this.timerID);
  }

  tick() {
    const { mode, isPlaying, time } = this.state;

    if (isPlaying) {
      this.setState((prevState) => {
        /* TODO 2.2: decrease time's value by one */
        // Return an object in this function that you want the new state to be.
        return { time: prevState.time - 1 };
      },
      () => {
        if (time === 0) {
          // TODO 2.2: stop timer
          this.stop();

          if (mode === 'WORK') {
            //TTODO 2.2: set a new timer in BREAK mode
            this.setTimer('BREAK', MODES_TIMES.BREAK);
          }

          if (mode === 'BREAK') {
            // TODO 2.2: call complete session
            this.completeSession();
            // TODO 2.2: set a new timer in WORK mode
            this.setTimer('WORK', MODES_TIMES.WORK);
          }
        }
      });
    }
  }

  toggleIsPlaying() {
    // TODO 5: Use the previous state to write this more succintly
    this.setState({
      isPlaying: !this.state.isPlaying
    })
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
