import React from 'react';
import styles from './stylesheet.scss';
import { actions as envActions } from '/reducers/env';
import { connect } from 'react-redux';

@connect(
  ({ env }) => ({
    env,
  }), {
    ...envActions,
  }
)
class Profile extends React.Component {
  render() {
    const { sponsors } = this.props.env;

    return (
      <div className={styles.profile}>
        <div className={styles.cover}>
          <span className={styles.avatar} />
          <div className={styles.overlay}>
            <span className={styles.name}>Jason Park</span>
            <span className={styles.points}>576 LTB</span>
          </div>
        </div>
        <div className={styles.sponsor_container}>
          {
            sponsors.map((sponsor, i) => (
              <div className={styles.sponsor} key={i} style={{ backgroundImage: `url(${sponsor.cover})` }}>
                <div className={styles.overlay}>
                  <span className={styles.name}>{sponsor.title}</span>
                  <span className={styles.points}>{sponsor.points} LTB</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Profile;