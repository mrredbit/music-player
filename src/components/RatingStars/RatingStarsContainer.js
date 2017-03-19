import React, {
  Component,
  PropTypes
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RatingStars from './RatingStars';
import playQueueActions from '../../actions/playQueueActions'

class RatingStarsContainer extends Component {
  render() {
    const {actions, playQueue, track, musicLib, readonly} = this.props;
    return <RatingStars track={track}
                        playQueue={playQueue}
                        musicLib={musicLib}
                        readonly={readonly}
                        {...actions}/>;
  }
}

RatingStarsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  playQueue: PropTypes.object.isRequired,
  track: PropTypes.object.isRequired,
  musicLib: PropTypes.object.isRequired,
  readonly: PropTypes.bool
};

function mapStateToProps(state) {
  const props = {
    playQueue: state.playerState.playQueue,
    musicLib: state.playerState.musicLib
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    onRateTrack: playQueueActions.rateTrack
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingStarsContainer);
