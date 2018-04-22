import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faCheckCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
import styles from './stylesheet.scss';
import { classes } from '/common/util';
import { Link } from "react-router-dom";

class TaskList extends React.Component {
  render() {
    return (
      <div className={styles.task_list}>
        <div className={styles.cover}>
          <div className={styles.overlay}>
            <div className={styles.detail}>
              <span className={styles.name}>Pick Up Litters</span>
              <span className={styles.points}>Up to 37 LTB</span>
            </div>
            <Link className={styles.button} to="/tasks/litter">
              <FontAwesomeIcon fixedWidth icon={faPlay} className={styles.icon} />
              <span className={styles.text}>Begin</span>
            </Link>
          </div>
        </div>
        {
          [true, true, false].map((checked, i) => (
            <div className={classes(styles.task, checked && styles.checked)} key={i}>
              {
                <FontAwesomeIcon fixedWidth icon={checked ? faCheckCircle : faCircle} className={styles.icon} />
              }
              <span className={styles.name}>Participate in EarthX</span>
              <span className={styles.points}>Up to 45 LTB</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default TaskList;