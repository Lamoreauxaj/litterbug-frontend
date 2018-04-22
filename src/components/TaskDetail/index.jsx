import React from 'react';
import styles from './stylesheet.scss';
import { Camera, CheckItem, TaskItem, TrashMap } from '/components';
import { connect } from 'react-redux';
import { actions as envActions } from '/reducers/env';

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