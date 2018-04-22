import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMap from '@fortawesome/fontawesome-free-solid/faMapMarker';
import faFlag from '@fortawesome/fontawesome-free-solid/faFlag';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
import faTrophy from '@fortawesome/fontawesome-free-solid/faTrophy';
import styles from './stylesheet.scss';
import faker from 'faker';

const users = Array(20).fill(0).map(() => ({
  avatar: faker.internet.avatar(),
  username: faker.internet.userName(),
}));

class Leaderboard extends React.Component {
  render() {
    return (
      <div className={styles.leaderboard}>
        <div className={styles.cover}>
          <div className={styles.overlay}>
            <div className={styles.detail}>
              <span className={styles.name}>Leaderboard</span>
              <span className={styles.sub}>Ranked <span className={styles.bold}>#17</span> in <span
                className={styles.bold}>Dallas, Texas</span></span>
            </div>
            <a className={styles.button} href="#">
              <FontAwesomeIcon fixedWidth icon={faMap} className={styles.icon} />
              <span className={styles.text}>Local</span>
            </a>
            <a className={styles.button} href="#">
              <FontAwesomeIcon fixedWidth icon={faFlag} className={styles.icon} />
              <span className={styles.text}>Regional</span>
            </a>
            <a className={styles.button} href="#">
              <FontAwesomeIcon fixedWidth icon={faGlobe} className={styles.icon} />
              <span className={styles.text}>Global</span>
            </a>
          </div>
        </div>
        {
          users.map((user, i) => (
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
              <span className={styles.points}>175 LTB</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Leaderboard; 