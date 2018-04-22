import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import styles from './stylesheet.scss';
import { classes } from '/common/util';

class CheckItem extends React.Component {
  render() {
    const { children, extra, points, progress } = this.props;

    return (
      <div className={styles.check_item}>
        {
          <div className={styles.progress} style={{ width: Math.abs(progress) * 100 + '%' }} />
        }
        <div className={styles.wrapper}>
          {
            progress === 1 ?
              <div className={classes(styles.icon, styles.done)}>
                <FontAwesomeIcon fixedWidth icon={faCheck} />
              </div> :
              progress > 0 ?
                <div className={classes(styles.icon, styles.doing)}>
                  <FontAwesomeIcon fixedWidth icon={faSpinner} />
                </div> :
                progress < 0 ?
                  <div className={classes(styles.icon, styles.not)}>
                    <FontAwesomeIcon fixedWidth icon={faTimes} />
                  </div> :
                  <div className={styles.icon}>
                    <FontAwesomeIcon fixedWidth icon={extra ? faPlus : faCircle} />
                  </div>
          }
          <span className={styles.name}>{children}</span>
          <span className={styles.points}>
            <span className={styles.current}>{Math.max(points * progress, 0) | 0}</span> / {points} LTB
          </span>
        </div>
      </div>
    );
  }
}

export default CheckItem;