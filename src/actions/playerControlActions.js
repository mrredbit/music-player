import actionTypes from '../const/actionTypes';
import actionSources from '../const/actionSources';
import apiActions from '../actions/apiActions';
import audioPlayer from '../helper/audioPlayer';
import store from '../stores';

export default {
  playPause: function () {
    audioPlayer.playPause();
    return {
      type: actionTypes.PLAYER_CONTROL.PLAY_PAUSE,
      source: actionSources.BY_USER,
      data: null
    };
  },
  play: function () {
    audioPlayer.play();
    return {
      type: actionTypes.PLAYER_CONTROL.PLAY,
      source: actionSources.BY_USER,
      data: null
    };
  },
  pause: function () {
    audioPlayer.pause();
    return {
      type: actionTypes.PLAYER_CONTROL.PAUSE,
      source: actionSources.BY_USER,
      data: null
    };
  },
  played: function () {
    return {
      type: actionTypes.PLAYER_CONTROL.PLAYED,
      source: actionSources.BY_SYSTEM,
      data: null
    };
  },
  paused: function () {
    return {
      type: actionTypes.PLAYER_CONTROL.PAUSED,
      source: actionSources.BY_SYSTEM,
      data: null
    };
  },
  prev: function (playQueue) {

    const items = playQueue.items;
    const historyItems = playQueue.historyItems;
    if (historyItems.length) {
      const newPlayQueue = Object.assign({}, playQueue, {
          items: [historyItems[historyItems.length - 1], ...items],
          historyItems: historyItems.slice(0, -1)
        }
      );
      store.dispatch(apiActions.updateMainPlaylist({playQueue: newPlayQueue}));
    }

    return {
      type: actionTypes.PLAYER_CONTROL.PREV,
      source: actionSources.BY_USER,
      data: null
    };
  },
  next: function (playQueue) {
    const items = playQueue.items;
    const historyItems = playQueue.historyItems;
    if (items.length) {
      const newPlayQueue = Object.assign({}, playQueue, {
          historyItems: [...historyItems, items[0]].slice(-5),
          items: items.slice(1)
        }
      );
      store.dispatch(apiActions.updateMainPlaylist({playQueue: newPlayQueue}));
    }
    return {
      type: actionTypes.PLAYER_CONTROL.NEXT,
      source: actionSources.BY_USER,
      data: null
    };
  },
  ended: function (playQueue) {
    const items = playQueue.items;
    const historyItems = playQueue.historyItems;
    if (items.length) {
      const newPlayQueue = Object.assign({}, playQueue, {
          historyItems: [...historyItems, items[0]].slice(-5),
          items: items.slice(1)
        }
      );
      store.dispatch(apiActions.updateMainPlaylist({playQueue: newPlayQueue}));
    }
    return {
      type: actionTypes.PLAYER_CONTROL.ENDED,
      source: actionSources.BY_SYSTEM,
      data: null
    };
  },
  updateTimePosition: function (data) {
    return {
      type: actionTypes.PLAYER_CONTROL.UPDATE_TIME_POS,
      source: actionSources.BY_SYSTEM,
      data: data
    };
  }
}
