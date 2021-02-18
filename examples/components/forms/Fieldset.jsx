import React from 'react';

const Fieldset = ({ label, className, ...props }) => (
  <fieldset className={className}>
    <label className="w-full cursor-pointer">
      {label}
      {props.children}
    </label>
  </fieldset>
);

export default Fieldset;
