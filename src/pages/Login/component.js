import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import LoginForm from '../../components/forms/Login';
import { IMAGES } from '../../configs';

export default class Component extends React.Component {
  constructor() {
    super();

    this._handleSubmit = this._handleSubmit.bind(this);
  }
  
  _handleSubmit(values = {}) {
    const { actions } = this.props;
    const payload = {
      username: values.username,
      password: values.password,
    };

    actions.fetchLogin(payload);
  }

  render() {
    const { classes, isLoading, message } = this.props;

    return (
      <main className={classes.container}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={IMAGES.LOGO}
          />
          <CardContent>
            <LoginForm id="loginForm" buttonClassName={classes.button} onSubmit={this._handleSubmit} isLoading={isLoading} message={message} />
          </CardContent>
        </Card>
      </main>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  actions: PropTypes.object,
  isLoading: PropTypes.bool,
  message: PropTypes.string,
};
