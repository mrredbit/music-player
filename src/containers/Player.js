import React, {
  Component,
  PropTypes
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Player from '../components/Player';

import playerActions from '../actions/playerActions';
import apiActions from '../actions/apiActions';

class PlayerContainer extends Component {
  componentDidMount() {
    this.props.actions.getMainPlaylistTracks()
    this.props.actions.getMusicLibTracks();
  }

  render() {
    const {actions, playQueue, musicLib, view} = this.props;
    return <Player actions={actions}
                   playQueue={playQueue}
                   musicLib={musicLib}
                   view={view}
                   {...actions}/>;

  }
}
PlayerContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  playQueue: PropTypes.object.isRequired,
  musicLib: PropTypes.object.isRequired,
  view: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const props = {
    playQueue: state.playerState.playQueue,
    musicLib: state.playerState.musicLib,
    view: state.playerState.view
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    onViewSwitchClick: playerActions.switchView,
    getMusicLibTracks: apiActions.getMusicLibTracks,
    getMainPlaylistTracks: apiActions.getMainPlaylistTracks
};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
