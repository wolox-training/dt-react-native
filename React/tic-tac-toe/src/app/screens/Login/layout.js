import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import CustomInput from '../../components/Input';

import { validate } from './validation';

class Form extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { handleSubmit } = this.props;
    /* eslint-enable react/prop-types */
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" component={CustomInput} type="text" label="Email: " />
        <Field name="pass" component={CustomInput} type="password" label="Password: " />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate
})(Form);
