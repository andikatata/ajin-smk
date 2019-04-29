import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Sekolah from './component';
import * as actions from './action';
import styles from './styles';

function mapStateToProps(state) {
  const { isLoading, data } = state.sekolah;
  return {
    isLoading,
    data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const StyledHome = withStyles(styles)(Sekolah);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledHome);