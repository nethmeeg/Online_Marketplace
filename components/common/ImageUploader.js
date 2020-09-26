import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ImageUploader = ({
  name,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
    
        type={type}
        className={classnames('form-control', {
          'is-invalid': error
        })}
        name={name}
        onChange={onChange}
        disabled={disabled}

      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

ImageUploader.propTypes = {
 
  name: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

ImageUploader.defaultProps = {
  type: 'file'
};

export default ImageUploader;