import keyMirror from 'keymirror';

const constant = {
  PLAYING_STATE: keyMirror({
    PLAYING: null,
    PAUSED: null
  }),
  PLAYER_VIEW: keyMirror({
    PLAY_QUEUE: null,
    MUSIC_LIB: null
  })
}

export default constant;
