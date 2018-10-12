import React, { Component } from 'react';
/* import { Link } from 'react-router-dom'; */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import actionsCreators from '../../../redux/Login/actions';
import Game from '../Game/index';

import Form from './layout';

class LoginPage extends Component {
  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      this.props.dispatch(actionsCreators.logeed());
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
    if (this.props.logged) {
      this.routeGame();
    } else {
      /* eslint-disable */
      window.alert(
        JSON.stringify(`El email: ${values.email} y/o contrasena: ${values.pass} no coinciden`, null, 4)
      );
      /* eslint-enable */
    }
  };
  render() {
    if (this.props.logged) {
      return this.routeGame();
    }
    return <Form onSubmit={this.submit} />;
  }
}

LoginPage.propTypes = {
  logged: PropTypes.bool
};

const stateToProps = state => ({
  logged: state.login.logged,
  failure: state.login.failure
});

export default connect(stateToProps)(LoginPage);
