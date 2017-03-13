import actionTypes from '../const/actionTypes';
import actionSources from '../const/actionSources';
import apiAction from '../actions/apiActions';
import store from '../stores';

export default {
  removeTrackFromQueue: function (id, playQueue) {
    const items = playQueue.items;
    if (items.length) {
      const newItems = items.filter((item) => item.id !== id);
      const newPlayQueue = Object.assign({}, playQueue, {
          items: [...newItems]
        }
      );
      store.dispatch(apiAction.updateMainPlaylist({playQueue: newPlayQueue}));
    }
    return {
      type: actionTypes.PLAY_QUEUE.REMOVE_TRACK_FROM_QUEUE,
      source: actionSources.BY_USER,
      data: {id: id}
    };
  },
  rateTrack: function (track, playQueue, musicLib, rate) {
    if (!playQueue || !musicLib) {
      return;
    }
    // Update rating in play queue
    const newHistoryItems = playQueue.historyItems.map((item)=> {
      if (item.trackId === track.trackId) {
        return Object.assign({}, item, {rating: rate});
      } else {
        return item;
      }
    });
    const newItems = playQueue.items.map((item)=> {
      if (item.trackId === track.trackId) {
        return Object.assign({}, item, {rating: rate});
      } else {
        return item;
      }
    });
    const newPlayQueue = Object.assign({}, playQueue, {
      items: newItems,
      historyItems: newHistoryItems
    })
    store.dispatch(apiAction.updateMainPlaylist({playQueue: newPlayQueue}));

    // Update rating in music library
    const musicLibTrack = musicLib.tracks.find((musicLibTrack)=> {
      return musicLibTrack.id === track.trackId;
    });
    const newTrack = Object.assign({}, musicLibTrack, {rating: rate});
    store.dispatch(apiAction.updateMusicLibTrack(newTrack));

    return {
      type: actionTypes.PLAY_QUEUE.RATE,
      source: actionSources.BY_USER,
      data: {
        track: track,
        rate: rate
      }
    };
  }
}
