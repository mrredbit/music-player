import actionTypes from '../const/actionTypes';
import actionSources from '../const/actionSources';
import apiAction from '../actions/apiActions';
import store from '../stores';
import uuidV4 from 'uuid/v4';

export default {
  addTrackToQueue: function (track, playQueue) {
    const items = playQueue.items;
    const newPlayQueue = Object.assign({}, playQueue, {
        items: [...items, Object.assign({}, track, {
          id: uuidV4(),
          trackId: track.id
        })]
      }
    );
    store.dispatch(apiAction.updateMainPlaylist({playQueue: newPlayQueue}));
    return {
      type: actionTypes.MUSIC_LIB.ADD_TRACK_TO_QUEUE,
      source: actionSources.BY_USER,
      data: {track: track}
    };
  }
}
