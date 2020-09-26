import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const RadioButtonGroup = ({ name, value, error, type, onChange, options }) => {
  const selectRadioOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames('form-control', {
          'is-invalid': error
        })}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
      >
        {selectRadioOptions}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default RadioButtonGroup;