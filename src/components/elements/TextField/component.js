import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default class Component extends React.Component {
  render() {
    const {
      autoComplete,
      className,
      disabled,
      input,
      InputProps,
      label,
      meta: { error },
      multiline,
      placeholder,
      readOnly,
      rows,
      type,
      InputLabelProps,
    } = this.props;
    const helperText = error || '';
    const inputProps = {
      readOnly,
      autoComplete,
    };

    return (
      <TextField
        {...input}
        className={className}
        disabled={disabled}
        error={typeof error == 'string'}
        fullWidth
        helperText={helperText}
        label={label}
        margin="normal"
        multiline={multiline}
        placeholder={placeholder}
        inputProps={inputProps}
        InputProps={InputProps}
        rows={rows}
        type={type}
        InputLabelProps={InputLabelProps}
      />
    );
  }
}

Component.propTypes = {
  autoComplete: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  InputProps: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  rows: PropTypes.number,
  type: PropTypes.string,
  InputLabelProps: PropTypes.object
};