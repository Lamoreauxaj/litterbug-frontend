import React from 'react';
import styles from './stylesheet.scss';
import { CheckItem, TaskItem } from '/components';
import { connect } from 'react-redux';
import { actions as envActions } from '/reducers/env';
import { Litters } from '/components/TaskDetail/components';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const clat = 32.779101;
const clng = -96.746167;

@connect(
  ({ env }) => ({
    env,
  }), {
    ...envActions,
  }
)
@GoogleApiWrapper({
  apiKey: 'AIzaSyCnNDcEs9Vl7grUvFWosxzqjuZ-z F-mqMk',
  libraries: ['visualization'],
})
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
              <CheckItem points={0} progress={1} label="Go to Fair Park">
                <div className={styles.map_container}>
                  <Map google={this.props.google}
                       mapTypeControl={false}
                       initialCenter={{ lat: clat, lng: clng }}
                       zoom={14}>
                    <Marker />
                  </Map>
                </div>
              </CheckItem>
              <CheckItem extra points={20} progress={-1} label="Bike instead of Driving" />
              <CheckItem points={40} progress={1} label="Take a Photo of Your Ticket" />
            </div>
          ][taskIndex]
        }
      </div>
    );
  }
}

export default TaskDetail;