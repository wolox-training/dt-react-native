import React from 'react';

const customInput = props => (
  <div>
    <label htmlFor={props.input.name}>{props.label}</label>
    <input {...props.input} type={props.type} />
    {props.meta.error && props.meta.touched && <div style={{ color: 'red' }}>{props.meta.error}</div>}
  </div>
);

export default customInput;
