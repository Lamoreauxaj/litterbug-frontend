import React from 'react';
import styles from './stylesheet.scss';
import { TaskItem } from '/components';
import { connect } from 'react-redux';
import { actions as envActions } from '/reducers/env';
import { Litters } from '/components/TaskDetail/components';

@connect(
  ({ env }) => ({
    env,
  }), {
    ...envActions,
  }
)
class TaskDetail extends React.Component {
  render() {
    const { tasks, taskIndex } = this.props.env;
    const task = tasks[taskIndex];

    return (
      <div className={styles.task_detail}>
        <TaskItem task={task} />
        {
          [
            <Litters />,
          ][taskIndex]
        }
      </div>
    );
  }
}

export default TaskDetail;