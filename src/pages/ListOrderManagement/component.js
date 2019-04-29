import React from 'react';
import PropTypes from 'prop-types';

export default class Component extends React.Component {

  componentDidMount() {
    const { actions } = this.props;

    actions.fetchDataOrderManagement();
  }

  render() {
    const { data } = this.props;
    
    console.log(data);
    return(
      <div />
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  actions: PropTypes.object,
  isLoading: PropTypes.bool,
  data: PropTypes.object
};