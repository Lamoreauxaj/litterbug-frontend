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
      step: 3,
      progress: 0,
    };
  }

  componentDidMount() {
    let lastAlpha = null;
    let lastBeta = null;
    let lastGamma = null;
    let still = 0;
    let nonstill = 0;
    this.gn = new GyroNorm();
    this.gn.init({
      gravityNormalized: false, // tried true too
      orientationBase: GyroNorm.WORLD, // tried .GAME too
      frequency: 100,
      screenAdjusted: false,
    }).then(() => {
      this.gn.start(data => {
        const { alpha, beta, gamma } = data.do;
        if (lastAlpha !== null) {
          const da = (Math.abs(alpha - lastAlpha) + 360) % 360;
          const db = (Math.abs(beta - lastBeta) + 360) % 360;
          const dg = (Math.abs(gamma - lastGamma) + 180) % 180;
          const delta = Math.sqrt(da * da + db * db + dg * dg);
          if (delta < .1) {
            still++;
          } else {
            nonstill++;
          }
          const { step } = this.state;
          if (step === 0) {
            if (still + nonstill > 30) {
              if (still === 0 || nonstill / still > 1) {
                this.setState({ step: 1 });
              }
              still = nonstill = 0;
            }
          } else if (step === 1) {
            if (still + nonstill > 30) {
              if (nonstill === 0 || still / nonstill > 1.5) {
                this.setState({ step: 2 });
                this.gn.end();
              }
              still = nonstill = 0;
            }
          }
        }
        lastAlpha = alpha;
        lastBeta = beta;
        lastGamma = gamma;
      });
    }).catch(console.error);
  }

  componentWillUnmount() {
    this.gn.end();
  }

  increaseProgress() {
    const progress = this.state.progress + .25;
    this.setState({ progress });
    if (progress === 1) {
      this.setState({ step: 3 })
    }
  }

  render() {
    const { step, progress } = this.state;

    return (
      <div className={styles.litters}>
        <CheckItem points={0} progress={step === 1 ? .5 : step > 1 ? 1 : 0} label="Go to Somewhere">
          {
            step < 2 &&
            <TrashMap />
          }
        </CheckItem>
        <CheckItem extra points={10} progress={step === 1 ? .5 : step > 1 ? 1 : 0} label="Walk instead of Driving" />
        <CheckItem points={25} progress={progress} label="Pick up 5 Pieces of Trash">
          {
            step === 2 &&
            <Camera onValid={() => this.increaseProgress()} />
          }
        </CheckItem>
      </div>
    );
  }
}

export default Litters;