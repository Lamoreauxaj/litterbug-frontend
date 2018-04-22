import React from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTasks from '@fortawesome/fontawesome-free-solid/faTasks';
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';
import { actions as envActions } from '/reducers/env';
import styles from './stylesheet.scss';
import { classes } from '/common/util';
import { TaskDetail } from '/components';

@connect(
  ({ env }) => ({
    env,
  }), {
    ...envActions,
  }
)
class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      navOpacity: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    const navOpacity = Math.min(window.scrollY / 64.0, 1);
    this.setState({ navOpacity });
  }

  render() {
    const { navOpacity } = this.state;

    return (
      <div className={styles.app}>
        <nav className={classes(styles.nav, navOpacity && styles.shadow)}
             style={{ backgroundColor: `rgba(13, 63, 82, ${navOpacity})` }}>
          <div className={styles.icon}>
            <FontAwesomeIcon fixedWidth icon={faTasks} />
          </div>
          <div className={styles.title}>LitterBug</div>
          <div className={styles.icon}>
            <FontAwesomeIcon fixedWidth icon={faUserCircle} />
          </div>
        </nav>
        <main className={styles.main}>
          <TaskDetail />
        </main>
      </div>
    );
  }
}

export default App;