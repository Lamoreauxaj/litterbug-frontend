import React from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTasks from '@fortawesome/fontawesome-free-solid/faTasks';
import faTrophy from '@fortawesome/fontawesome-free-solid/faTrophy';
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import { actions as envActions } from '/reducers/env';
import styles from './stylesheet.scss';
import { classes } from '/common/util';
import { Leaderboard, Profile, TaskDetail, TaskList } from '/components';

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
      showProfile: false,
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

  handleClickMenu() {
    const { taskIndex } = this.props.env;
    if (taskIndex === -2) {
      this.props.setTaskIndex(-1);
    } else if (taskIndex === -1) {
      this.props.setTaskIndex(-2);
    } else {
      this.props.setTaskIndex(-1);
    }
  }

  setShowProfile(showProfile) {
    this.setState({ showProfile });
  }

  render() {
    const { navOpacity, showProfile } = this.state;
    const { taskIndex } = this.props.env;

    return (
      <div className={styles.app}>
        <nav className={classes(styles.nav, navOpacity && styles.shadow)}
             style={{ backgroundColor: `rgba(13, 63, 82, ${navOpacity})` }}>
          <a className={styles.icon} href="#" onClick={() => this.handleClickMenu()}>
            <FontAwesomeIcon fixedWidth icon={taskIndex === -2 ? faTasks : taskIndex === -1 ? faTrophy : faArrowLeft} />
          </a>
          <div className={styles.title}>LitterBug</div>
          <a className={styles.icon} href="#" onClick={() => this.setShowProfile(true)}>
            <FontAwesomeIcon fixedWidth icon={faUserCircle} />
          </a>
        </nav>
        <main className={styles.main}>
          {
            taskIndex === -2 ?
              <Leaderboard /> :
              taskIndex === -1 ?
                <TaskList /> :
                <TaskDetail />
          }
        </main>
        {
          showProfile &&
          <div className={styles.dialog_container}>
            <div className={styles.dialog}>
              <Profile />
              <a className={styles.close} href="#" onClick={() => this.setShowProfile(false)}>
                <FontAwesomeIcon fixedWidth icon={faTimes} />
              </a>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;