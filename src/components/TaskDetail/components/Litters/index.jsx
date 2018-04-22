import React from 'react';
import styles from './stylesheet.scss';
import { actions as envActions } from '/reducers/env';
import { connect } from 'react-redux';
import { Camera, CheckItem, TrashMap } from '/components';

@connect(
  ({ env }) => ({
    env,
  }), {
    ...envActions,
  }
)
class Litters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      progress: 0,
    };
  }

  render() {
    const { step, progress } = this.state;

    return (
      <div className={styles.litters}>
        <CheckItem points={0} progress={step > 0 ? 1 : 0} label="Go to Somewhere">
          {
            step === 0 &&
            <TrashMap />
          }
        </CheckItem>
        <CheckItem extra points={10} progress={step > 0 ? 1 : 0} label="Walk instead of Driving" />
        <CheckItem points={25} progress={progress} label="Pick up 5 Pieces of Trash">
          {
            step === 1 &&
            <Camera />
          }
        </CheckItem>
      </div>
    );
  }
}

export default Litters;