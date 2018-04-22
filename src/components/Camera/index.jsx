import React from 'react';
import styles from './stylesheet.scss';
import Webcam from 'react-webcam';
import axios from 'axios';

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.webcamRef = React.createRef();
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      const imageSrc = this.webcamRef.current.getScreenshot();
      const dataURLtoBlob = dataURL => {
        const binary = window.atob(dataURL.split(',')[1]);
        const array = [];
        let i = 0;
        while (i < binary.length) array.push(binary.charCodeAt(i++));
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
      };
      const data = new FormData();
      data.append('file', dataURLtoBlob(imageSrc));
      axios.post('http://206.189.178.156/validate-image', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      }).then(response => {
        console.log(response.data);
      }).catch(console.error);
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.camera}>
        <Webcam
          audio={false}
          width={400}
          ref={this.webcamRef}
          screenshotFormat="image/jpeg" />
      </div>
    );
  }
}

export default Camera;