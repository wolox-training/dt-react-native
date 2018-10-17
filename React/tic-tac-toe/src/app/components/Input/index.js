import React from 'react';

import input from './input.scss';

const customInput = props => (
  <div>
    <label htmlFor={props.input.name}>{props.label}</label>
    <input {...props.input} type={props.type} />
    {props.meta.error && props.meta.touched && <div className={input.textError}>{props.meta.error}</div>}
  </div>
);

export default customInput;
