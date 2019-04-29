import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Text from '../../../components/elements/Text';
import TextField from '../../../components/elements/TextField';

export default class Component extends React.Component {
  constructor() {
    super();

    this.state = {
      showPassword: false
    };
    this._handleClickShowPassword = this._handleClickShowPassword.bind(this);
  }

  _handleClickShowPassword() {
    const { showPassword } = this.state;

    this.setState({ showPassword: !showPassword });
  }

  render() {
    const { buttonClassName, handleSubmit, isLoading, invalid, submitting, message, } = this.props;
    const { showPassword } = this.state;
    const disabled = invalid || submitting || isLoading;
    const metaUsername = message ? { error: message } : {};
    const metaPassword = message ? { error: '' } : {};

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="username" component={TextField} meta={metaUsername} fullWidth label="Username" margin="normal" />
        </div>
        <div>
          <Field
            name="password"
            component={TextField}
            meta={metaPassword}
            fullWidth
            label="Password"
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <IconButton id="visible" onClick={this._handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
            }}
            type={showPassword ? 'text' : 'password'}
            margin="normal" />
        </div>
        <div>
          <Text variant="caption" align="right">Lupa Password?</Text>
        </div>
        <div>
          <Button className={buttonClassName} type="submit" fullWidth color="primary" variant="contained" disabled={disabled} size="large">Login</Button>
        </div>
      </form>
    );
  }
}

Component.propTypes = {
  buttonClassName: PropTypes.string,
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  message: PropTypes.string,
};