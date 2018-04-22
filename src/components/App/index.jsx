import React from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTasks from '@fortawesome/fontawesome-free-solid/faTasks';
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';
import { actions as envActions } from '/reducers/env';
import styles from './stylesheet.scss';
import { Route, Switch } from "react-router-dom";
import { TaskList } from "/components";

@connect(
  ({ env }) => ({
    env,
  }), {
    ...envActions,
  }
)
class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <nav className={styles.nav}>
          <div className={styles.icon}>
            <FontAwesomeIcon fixedWidth icon={faTasks} />
          </div>
          <div className={styles.title}>LitterBug</div>
          <div className={styles.icon}>
            <FontAwesomeIcon fixedWidth icon={faUserCircle} />
          </div>
        </nav>
        <main className={styles.main}>
          <Switch>
            <Route path="/tasks" component={TaskList} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;