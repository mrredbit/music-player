import React, {
  Component,
  PropTypes
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CurrentTrack from '../components/CurrentTrack';

class CurrentTrackContainer extends Component {
  render() {
    const {actions, track} = this.props;
    return <CurrentTrack track={track} {...actions}/>;
  }
}

CurrentTrackContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  track: PropTypes.object.isRequired
};

function mapStateToProps() {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrackContainer);
