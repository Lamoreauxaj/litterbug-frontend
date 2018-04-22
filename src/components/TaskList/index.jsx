import React from 'react';
import styles from './stylesheet.scss';
import { TaskItem } from '/components';
import { connect } from 'react-redux';
import { actions as envActions } from '/reducers/env';

@connect(
  ({ env }) => ({
    env,
  }), {
    ...envActions,
  }
)
class TaskList extends React.Component {
  render() {
    const { tasks } = this.props.env;

    return (
      <div className={styles.task_list}>
        {
          tasks.map((task, i) => (
            <TaskItem more task={task} key={i} onClick={() => this.props.setTaskIndex(i)} />
          ))
        }
      </div>
    );
  }
}

export default TaskList;