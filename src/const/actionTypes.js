import keyMirror from 'keymirror';

const constant = {
  PLAYER_CONTROL: keyMirror({
    PLAY: null,
    PLAYED: null,
    PAUSE: null,
    PAUSED: null,
    PLAY_PAUSE: null,
    PREV: null,
    NEXT: null,
    ENDED: null,
    UPDATE_TIME_POS: null
  }),
  MUSIC_LIB: keyMirror({
    ADD_TRACK_TO_QUEUE: null,
    CHANGE_SORT_BY: null,
    CHANGE_FILTER: null
  }),
  PLAY_QUEUE: keyMirror({
    RATE: null,
    REMOVE_TRACK_FROM_QUEUE: null
  }),
  PLAYER: keyMirror({
    SWITCH_VIEW: null
  }),
  API: keyMirror({
    GET_MAIN_PLAYLIST_REQUEST: null,
    GET_MAIN_PLAYLIST_SUCCESS: null,
    GET_MAIN_PLAYLIST_FAIL: null,
    UPDATE_MAIN_PLAYLIST_REQUEST: null,
    UPDATE_MAIN_PLAYLIST_SUCCESS: null,
    UPDATE_MAIN_PLAYLIST_FAIL: null,
    GET_MUSIC_LIB_TRACKS_REQUEST: null,
    GET_MUSIC_LIB_TRACKS_SUCCESS: null,
    GET_MUSIC_LIB_TRACKS_FAIL: null,
    UPDATE_MUSIC_LIB_TRACK_REQUEST: null,
    UPDATE_MUSIC_LIB_TRACK_SUCCESS: null,
    UPDATE_MUSIC_LIB_TRACK_FAIL: null
  })
}

export default constant;
