import constant from '../const/general';
import actionTypes from'../const/actionTypes';

const playingState = constant.PLAYING_STATE;

const initialPlayerState = {
  playerControl: {
    playingTimePosition: 0,
    trackDuration: 0,
    playingState: playingState.PAUSED
  },
  playQueue: {
    id: 1,
    name: 'Main',
    items: [],
    historyItems: [],
    isLoading: false,
    isError: false
  },
  musicLib: {
    tracks: [],
    isLoading: false,
    isError: false
  },
  view: constant.PLAYER_VIEW.MUSIC_LIB
};

const playerReducer = function (playerState = initialPlayerState, action = {}) {
  let newPlayQueue, newMusicLib, newPlayerControl, newTracks, newMusicLibTracks, newHistoryItems, newItems;
  let data = action.data;

  switch (action.type) {
    /** Player Control Actions */
    case actionTypes.PLAYER_CONTROL.PAUSED:
      newPlayerControl = Object.assign({}, playerState.playerControl, {
        playingState: playingState.PAUSED
      });
      playerState = Object.assign({}, playerState, {playerControl: newPlayerControl});
      break;

    case actionTypes.PLAYER_CONTROL.PLAYED:
      newPlayerControl = Object.assign({}, playerState.playerControl, {
        playingState: playingState.PLAYING
      });
      playerState = Object.assign({}, playerState, {playerControl: newPlayerControl});
      break;

    case actionTypes.PLAYER_CONTROL.UPDATE_TIME_POS:
      newPlayerControl = Object.assign({}, playerState.playerControl, {
        playingTimePosition: data.playingTimePosition,
        trackDuration: data.trackDuration
      });
      playerState = Object.assign({}, playerState, {playerControl: newPlayerControl});
      break;

    case actionTypes.PLAYER_CONTROL.NEXT:
    case actionTypes.PLAYER_CONTROL.PREV:
      newPlayerControl = Object.assign({}, playerState.playerControl, {
        playingTimePosition: 0,
        trackDuration: 0
      });
      playerState = Object.assign({}, playerState, {playerControl: newPlayerControl});
      break;

    case actionTypes.PLAYER.SWITCH_VIEW:
      playerState = Object.assign({}, playerState, {view: data.view})
      break;

    /** Api Actions */
    case actionTypes.API.GET_MUSIC_LIB_TRACKS_REQUEST:
      newMusicLib = Object.assign({}, playerState.musicLib, {
        isLoading: true
      });
      playerState = Object.assign({}, playerState, {musicLib: newMusicLib});
      break;
    case actionTypes.API.GET_MUSIC_LIB_TRACKS_SUCCESS:
      newMusicLib = Object.assign({}, playerState.musicLib, {
        tracks: data.tracks,
        isLoading: false,
        isError: false
      });
      playerState = Object.assign({}, playerState, {musicLib: newMusicLib});
      break;
    case actionTypes.API.GET_MUSIC_LIB_TRACKS_FAIL:
      newMusicLib = Object.assign({}, playerState.musicLib, {
        isLoading: false,
        isError: true
      });
      playerState = Object.assign({}, playerState, {musicLib: newMusicLib});
      break;

    case actionTypes.API.UPDATE_MUSIC_LIB_TRACK_REQUEST:
      newMusicLib = Object.assign({}, playerState.musicLib, {
        isLoading: true
      });
      playerState = Object.assign({}, playerState, {musicLib: newMusicLib});
      break;
    case actionTypes.API.UPDATE_MUSIC_LIB_TRACK_SUCCESS:
      newTracks = playerState.musicLib.tracks.map((track)=> {
        if (track.id === data.track.id) {
          return Object.assign({}, data.track);
        } else {
          return track;
        }
      });
      newMusicLib = Object.assign({}, playerState.musicLib, {
        tracks: newTracks,
        isLoading: false,
        isError: false
      });
      playerState = Object.assign({}, playerState, {musicLib: newMusicLib});
      break;
    case actionTypes.API.UPDATE_MUSIC_LIB_TRACK_FAIL:
      newMusicLib = Object.assign({}, playerState.musicLib, {
        isLoading: false,
        isError: true
      });
      playerState = Object.assign({}, playerState, {musicLib: newMusicLib});
      break;


    case actionTypes.API.GET_MAIN_PLAYLIST_REQUEST:
      newPlayQueue = Object.assign({}, playerState.playQueue, {
        isLoading: true
      });
      playerState = Object.assign({}, playerState, {playQueue: newPlayQueue});
      break;
    case actionTypes.API.GET_MAIN_PLAYLIST_SUCCESS:
      newPlayQueue = Object.assign({}, playerState.playQueue, data, {
        isLoading: false,
        isError: false
      });
      newPlayerControl = Object.assign({}, playerState.playerControl, {
        playingState: data.items.length ? playerState.playerControl.playingState : playingState.PAUSED,
        playingTimePosition: data.items.length ? playerState.playerControl.playingTimePosition : 0,
        trackDuration: data.items.length ? playerState.playerControl.trackDuration : 0
      });
      playerState = Object.assign({}, playerState, {
        playQueue: newPlayQueue,
        playerControl: newPlayerControl
      });
      break;
    case actionTypes.API.GET_MAIN_PLAYLIST_FAIL:
      newPlayQueue = Object.assign({}, playerState.playQueue, {
        isLoading: false,
        isError: true
      });
      playerState = Object.assign({}, playerState, {playQueue: newPlayQueue});
      break;

    case actionTypes.API.UPDATE_MAIN_PLAYLIST_TRACK:
      newPlayQueue = Object.assign({}, playerState.playQueue, {
        isLoading: true
      });
      playerState = Object.assign({}, playerState, {playQueue: newPlayQueue});
      break;
    case actionTypes.API.UPDATE_MAIN_PLAYLIST_SUCCESS:
      newPlayQueue = Object.assign({}, data, {
        isLoading: false,
        isError: false
      });

      newPlayerControl = Object.assign({}, playerState.playerControl, {
        playingState: data.items.length ? playerState.playerControl.playingState : playingState.PAUSED,
        playingTimePosition: data.items.length ? playerState.playerControl.playingTimePosition : 0,
        trackDuration: data.items.length ? playerState.playerControl.trackDuration : 0
      });

      playerState = Object.assign({}, playerState, {
        playQueue: newPlayQueue,
        playerControl: newPlayerControl
      });
      break;
    case actionTypes.API.UPDATE_MAIN_PLAYLIST_TRACK_FAIL:
      newPlayQueue = Object.assign({}, playerState.playQueue, {
        isLoading: false,
        isError: true
      });
      playerState = Object.assign({}, playerState, {playQueue: newPlayQueue});
      break;


    // Below are optimistic updates
    // (Assume the update request will success, update client side UI before the round trip to gain better performance)
    case actionTypes.PLAY_QUEUE.RATE:
      // Update rating in play queue
      newHistoryItems = playerState.playQueue.historyItems.map((item)=> {
        if (item.trackId === data.track.trackId) {
          return Object.assign({}, item, {rating: data.rate});
        } else {
          return item;
        }
      });
      newItems = playerState.playQueue.items.map((item)=> {
        if (item.trackId === data.track.trackId) {
          return Object.assign({}, item, {rating: data.rate});
        } else {
          return item;
        }
      });
      newPlayQueue = Object.assign({}, playerState.playQueue, {
        items: newItems,
        historyItems: newHistoryItems
      })

      // Update rating in music library
      newMusicLibTracks = playerState.musicLib.tracks.map((musicLibTrack)=> {
        if (musicLibTrack.id === data.track.trackId) {
          return Object.assign({}, musicLibTrack, {rating: data.rating});
        } else {
          return musicLibTrack;
        }
      });

      newMusicLib = Object.assign({}, playerState.musicLib, {tracks: newMusicLibTracks});

      return Object.assign({}, playerState, {
        playQueue: newPlayQueue,
        musicLib: newMusicLib
      });
  }
  return playerState;
};

export default playerReducer;
