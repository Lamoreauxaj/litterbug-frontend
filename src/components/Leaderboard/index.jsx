import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMap from '@fortawesome/fontawesome-free-solid/faMapMarker';
import faFlag from '@fortawesome/fontawesome-free-solid/faFlag';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
import faTrophy from '@fortawesome/fontawesome-free-solid/faTrophy';
import styles from './stylesheet.scss';
import { classes } from '/common/util'
import faker from 'faker';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 0,
    };
    this.refresh();
  }

  refresh() {
    let points = Math.random() * 1000 + 1000;
    this.users = Array(20).fill(0).map(() => {
      points -= Math.random() * 100;
      return {
        avatar: faker.internet.avatar(),
        username: faker.internet.userName(),
        points: points | 0,
      }
    });
  }

  setScale(scale) {
    this.refresh();
    this.setState({ scale });
  }

  render() {
    const { scale } = this.state;

    return (
      <div className={styles.leaderboard}>
        <div className={styles.cover}>
          <div className={styles.overlay}>
            <div className={styles.detail}>
              <span className={styles.name}>Leaderboard</span>
              <span className={styles.sub}>Ranked <span className={styles.bold}>#17</span> in <span
                className={styles.bold}>Dallas, Texas</span></span>
            </div>
            <a className={classes(styles.button, scale === 0 && styles.selected)} href="#"
               onClick={() => this.setScale(0)}>
              <FontAwesomeIcon fixedWidth icon={faMap} />
            </a>
            <a className={classes(styles.button, scale === 1 && styles.selected)} href="#"
               onClick={() => this.setScale(1)}>
              <FontAwesomeIcon fixedWidth icon={faFlag} />
            </a>
            <a className={classes(styles.button, scale === 2 && styles.selected)} href="#"
               onClick={() => this.setScale(2)}>
              <FontAwesomeIcon fixedWidth icon={faGlobe} />
            </a>
          </div>
        </div>
        {
          this.users.map((user, i) => (
            <div className={styles.row} key={i}>
              <div className={styles.icon}>
                {
                  i < 3 ?
                    <FontAwesomeIcon fixedWidth icon={faTrophy} className={styles.top} />
                    : i + 1
                }
              </div>
              <span className={styles.avatar} style={{ backgroundImage: `url(${user.avatar})` }} />
              <span className={styles.name}>{user.username}</span>
              <span className={styles.points}>{user.points} LTB</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Leaderboard; 