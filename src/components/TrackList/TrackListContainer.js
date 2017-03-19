import React, {
  Component,
  PropTypes
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TrackList from './TrackList';

import musicLibActions from '../../actions/musicLibActions';
import playQueueActions from '../../actions/playQueueActions';
import playerActions from '../../actions/playerActions';

class TrackListContainer extends Component {
  render() {
    const {actions, title, tracks, playerView, playQueue, isError} = this.props;
    return <TrackList title={title}
                      tracks={tracks}
                      playerView={playerView}
                      playQueue={playQueue}
                      isError={isError}
                      {...actions}/>;
  }
}

TrackListContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  title:PropTypes.string.isRequired,
  tracks: PropTypes.array.isRequired,
  playerView: PropTypes.string.isRequired,
  playQueue: PropTypes.object.isRequired,
  isError: PropTypes.bool
};

function mapStateToProps(state) {
  const props = {
    playQueue: state.playerState.playQueue,
    playerView: state.playerState.view
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    onViewSwitchClick: playerActions.switchView,
    onAddTrackClick: musicLibActions.addTrackToQueue,
    onRemoveTrackClick: playQueueActions.removeTrackFromQueue
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackListContainer);
