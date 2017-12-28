import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  NavLink,
  Link
} from 'react-router-dom';

import Home from './home';
import About from './about';

export default class App extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
