import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import CustomInput from '../../components/Input';

import { validate } from './validation';

class Form extends Component {
  render() {
    /* eslint-disable */
    const { handleSubmit } = this.props;
    /* eslint-enable */
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" component={CustomInput} type="text" label="Email: " />
        <Field name="pass" component={CustomInput} type="password" label="Password: " />
        <button type="submit" onClick={this.login}>
          Login
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate
})(Form);
