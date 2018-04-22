import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import styles from './stylesheet.scss';
import { Link } from 'react-router-dom';
import { Camera, CheckItem, TrashMap } from '/components';

class TaskDetail extends React.Component {
  render() {
    return (
      <div className={styles.task_detail}>
        <div className={styles.cover}>
          <div className={styles.overlay}>
            <div className={styles.detail}>
              <span className={styles.name}>Pick up Litters</span>
              <span className={styles.sub}>Earned <span className={styles.bold}>5</span> out of <span className={styles.bold}>32 LTB</span></span>
            </div>
            <a className={styles.button} href="#">
              <FontAwesomeIcon fixedWidth icon={faPlay} className={styles.icon} />
              <span className={styles.text}>Begin</span>
            </a>
          </div>
        </div>
        <CheckItem points={0} progress={1} label="Go to Somewhere">
          <TrashMap />
        </CheckItem>
        <CheckItem extra points={10} progress={-1} label="Walk instead of Driving">
        </CheckItem>
        <CheckItem points={25} progress={1 / 3} label="Pick up 5 Pieces of Trash">
          <Camera />
        </CheckItem>
      </div>
    );
  }
}

export default TaskDetail;