import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default class Component extends React.Component {
  render() {
    const { children, classes, className, ...rest } = this.props;
    const customClass = className ? `${classes.text} ${className}` : classes.text;

    return (
      <Typography className={customClass} {...rest}>
        {children}
      </Typography>
    );
  }
}

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  classes: PropTypes.object,
  className: PropTypes.string
};