import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styles from './stylesheet.scss';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';

class TaskItem extends React.Component {
  render() {
    const { more, onClick, task } = this.props;
    return (
      <div className={styles.task_item} style={{ backgroundImage: `url(${task.cover})` }}>
        <div className={styles.overlay}>
          <div className={styles.detail}>
            <span className={styles.name}>{task.title}</span>
            {
              task.current ?
                <span className={styles.sub}>Earned <span className={styles.bold}>{task.current}</span> out of <span
                  className={styles.bold}>{task.total} LTB</span></span> :
                <span className={styles.sub}><span className={styles.bold}>{task.total} LTB</span> Available</span>
            }
          </div>
          {
            more &&
            <a className={styles.button} href="#" onClick={onClick}>
              <FontAwesomeIcon fixedWidth icon={faPlus} className={styles.icon} />
              <span className={styles.text}>More</span>
            </a>
          }
        </div>
      </div>
    );
  }
}

export default TaskItem;