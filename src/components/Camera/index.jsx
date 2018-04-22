import React from 'react';
import styles from './stylesheet.scss';
import Webcam from 'react-webcam';
import axios from 'axios';

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.webcamRef = React.createRef();

    this.state = {
      similarity: 0
    };
  }

  componentDidMount() {
    const { onValid } = this.props;

    this.timer = window.setInterval(() => {
      try {
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
        axios.post('https://litter-bug.com/validate-image', data, {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          }
        }).then(response => {
          const { valid, similarity } = response.data;
          if (valid) onValid();
          this.setState({ similarity });
        }).catch(e => this.setState({ similarity: e.status }));
      } catch (e) {
        this.setState({ similarity: e.message });
      }
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.camera}>
        {this.state.similarity}
        <Webcam
          audio={false}
          width={400}
          height={320}
          ref={this.webcamRef}
          screenshotFormat="image/jpeg" />
      </div>
    );
  }
}

export default Camera;