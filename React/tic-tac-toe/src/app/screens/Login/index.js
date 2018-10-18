import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import actionsCreators from '../../../redux/Login/actions';
import Game from '../Game/index';

import Form from './layout';

class LoginPage extends Component {
  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      this.props.dispatch(actionsCreators.logged());
    }
  };

  routeGame = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/game" component={Game} />
        <Redirect to="/game" />
      </Switch>
    </BrowserRouter>
  );

  submit = values => {
    this.props.dispatch(actionsCreators.login(values.email, values.pass));
  };
  render() {
    if (this.props.logged) {
      return this.routeGame();
    }
    return (
      <div>
        <Form onSubmit={this.submit} />
        {this.props.failure && <span> No coincide el email y contraseña </span>}
      </div>
    );
  }
}

LoginPage.propTypes = {
  logged: PropTypes.bool,
  failure: PropTypes.bool
};

const stateToProps = state => ({
  logged: state.login.logged,
  failure: state.login.failure
});

export default connect(stateToProps)(LoginPage);
