import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import CustomInput from '../../components/Input';

import { validate } from './validation';

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" component={CustomInput} type="text" label="Email: " />
        <Field name="pass" component={CustomInput} type="password" label="Password: " />
        <button type="submit">Login</button>
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login',
  validate
})(Form);
