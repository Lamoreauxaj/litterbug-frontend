import React from 'react';
import styles from './stylesheet.scss';
import { GoogleApiWrapper, HeatMap, Map, Marker } from 'google-maps-react';

const positions = [];
const clat = 32.779101;
const clng = -96.746167;
for (let i = 0; i < 1000; i++) {
  positions.push({ lat: clat + Math.random() - .5, lng: clng + Math.random() - .5 });
}

@GoogleApiWrapper({
  apiKey: 'AIzaSyCnNDcEs9Vl7grUvFWosxzqjuZ-z F-mqMk',
  libraries: ['visualization'],
})
class TrashMap extends React.Component {
  render() {
    return (
      <div className={styles.trash_map}>
        <Map google={this.props.google}
             mapTypeControl={false}
             initialCenter={{ lat: clat, lng: clng }}
             mapType="satellite"
             zoom={10}>
          <HeatMap
            opacity={0.3}
            positions={positions}
            radius={20} />
          <Marker />
        </Map>
      </div>
    );
  }
}

export default TrashMap;