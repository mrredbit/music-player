import React, {
  Component,
  PropTypes
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PlayerControl from './PlayerControl';
import playControlActions from '../../actions/playerControlActions';

import audioPlayer from '../../helper/audioPlayer';
import constant from '../../const/general';

class PlayerControlContainer extends Component {
  loadTrack() {
    const props = this.props;

    if (props.playQueue.items.length) { // check if any track in the queue
      if (this.trackIdLoaded !== props.playQueue.items[0].id) { // Check is track already loaded
        audioPlayer.loadTrack(props.playQueue.items[0].track_path, {
          onPlay: () => {
            // console.log('Audio played...');
            props.actions.onPlayed();
          },
          onPause: () => {
            // console.log('Audio paused...');
            props.actions.onPaused();
          },
          onLoad: () => {
            // console.log('Audio loaded...');
            this.trackIdLoaded = props.playQueue.items[0].id;
            if (props.playerControl.playingState === constant.PLAYING_STATE.PLAYING) {
              audioPlayer.play();
            }
          },
          onEnd: () => {
            // console.log('Audio ended...');
            props.actions.onEnd(props.playQueue);
          },
          onStep: (seek, duration) => {
            props.actions.onStep({
              playingTimePosition: seek,
              trackDuration: duration
            });
          }
        });
      }
    } else {
      audioPlayer.unload();
    }
  }


  componentDidMount() {
    this.loadTrack();
  }

  componentDidUpdate() {
    this.loadTrack();
  }

  render() {
    const {actions, playQueue, playerControl} = this.props;
    return <PlayerControl playQueue={playQueue}
                          playerControl={playerControl}
                          {...actions}/>;
  }
}

PlayerControlContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  playQueue: PropTypes.object.isRequired,
  playerControl: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    playQueue: state.playerState.playQueue,
    playerControl: state.playerState.playerControl
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    onPlayPauseClick: playControlActions.playPause,
    onPlayed: playControlActions.played,
    onPaused: playControlActions.paused,
    onNextClick: playControlActions.next,
    onPrevClick: playControlActions.prev,
    onStep: playControlActions.updateTimePosition,
    onEnd: playControlActions.ended
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerControlContainer);
