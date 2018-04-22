import React from 'react';
import styles from './stylesheet.scss';
import { TaskItem } from '/components';
import { connect } from 'react-redux';
import { actions as envActions } from '/reducers/env';
import { Litters } from '/components/TaskDetail/components';
import { CheckItem } from '/components';

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
            <div className={styles.list}>
              <CheckItem points={0} progress={0} label="Go to Somewhere" />
              <CheckItem extra points={10} progress={0} label="Walk instead of Driving" />
              <CheckItem points={25} progress={0} label="Pick up 5 Pieces of Trash" />
            </div>
          ][taskIndex]
        }
      </div>
    );
  }
}

export default TaskDetail;