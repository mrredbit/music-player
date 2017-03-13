import dsPlaylists from '../sources/dsPlaylists';
import dsTracks from '../sources/dsTracks';

import actionTypes from '../const/actionTypes';
import actionSources from '../const/actionSources';

const apiAction = {
  getMusicLibTracks: function () {
    return function (dispatch) {
      dispatch(apiAction.getMusicLibTracksRequest());
      return dsTracks.getTracks()
        .then(function (response) {
          if (response.ok) {
            return response.text()
          }
        })
        .then(function (text) {
          const data = JSON.parse(text);
          dispatch(apiAction.getMusicLibTracksSucess({tracks: data}));
        })
        .catch(function () {
          dispatch(apiAction.getMusicLibTracksFail());
        });
    }
  },
  getMusicLibTracksRequest: function () {
    return {
      type: actionTypes.API.GET_MUSIC_LIB_TRACKS_REQUEST,
      source: actionSources.BY_SYSTEM,
      data: null
    };
  },
  getMusicLibTracksSucess: function (data) {
    return {
      type: actionTypes.API.GET_MUSIC_LIB_TRACKS_SUCCESS,
      source: actionSources.BY_SYSTEM,
      data: data
    };
  },
  getMusicLibTracksFail: function () {
    return {
      type: actionTypes.API.GET_MUSIC_LIB_TRACKS_FAIL,
      source: actionSources.BY_SYSTEM,
      data: null
    };
  },

  updateMusicLibTrack: function (track) {
    return function (dispatch) {
      dispatch(apiAction.updateMusicLibTracksRequest(track));
      return dsTracks.updateTrack(track)
        .then(function (response) {
          if (response.ok) {
            return response.text()
          }
        })
        .then(function (text) {
          const data = JSON.parse(text);
          dispatch(apiAction.updateMusicLibTracksSucess({track: data}));
        })
        .catch(function () {
          dispatch(apiAction.updateMusicLibTracksFail());
        });
    }
  },
  updateMusicLibTracksRequest: function (data) {
    return {
      type: actionTypes.API.UPDATE_MUSIC_LIB_TRACK_REQUEST,
      source: actionSources.BY_SYSTEM,
      data: data
    };
  },
  updateMusicLibTracksSucess: function (data) {
    return {
      type: actionTypes.API.UPDATE_MUSIC_LIB_TRACK_SUCCESS,
      source: actionSources.BY_SYSTEM,
      data: data
    };
  },
  updateMusicLibTracksFail: function () {
    return {
      type: actionTypes.API.UPDATE_MUSIC_LIB_TRACK_FAIL,
      source: actionSources.BY_SYSTEM,
      data: null
    };
  },

  getMainPlaylistTracks: function () {
    return function (dispatch) {
      dispatch(apiAction.getMainPlaylistTracksRequest());
      dsPlaylists.getMainPlaylistTracks()
        .then(function (response) {
          if (response.ok) {
            return response.text()
          }
        })
        .then(function (text) {
          const data = JSON.parse(text);
          dispatch(apiAction.getMainPlaylistTracksSuccess(data));
        })
        .catch(function () {
          dispatch(apiAction.getMainPlaylistTracksFail());
        });
    }
  },
  getMainPlaylistTracksRequest: function () {
    return {
      type: actionTypes.API.GET_MAIN_PLAYLIST_REQUEST,
      source: actionSources.BY_SYSTEM,
      data: null
    };
  },
  getMainPlaylistTracksSuccess: function (data) {
    return {
      type: actionTypes.API.GET_MAIN_PLAYLIST_SUCCESS,
      source: actionSources.BY_SYSTEM,
      data: data
    };
  },
  getMainPlaylistTracksFail: function () {
    return {
      type: actionTypes.API.GET_MAIN_PLAYLIST_FAIL,
      source: actionSources.BY_SYSTEM,
      data: null
    };
  },
  updateMainPlaylist: function (data) {
    return function (dispatch) {
      if (data.playQueue) {
        dispatch(apiAction.updateMainPlaylistRequest());
        dsPlaylists.updateMainPlaylist(data.playQueue)
          .then(function (response) {
            if (response.ok) {
              return response.text()
            }
          })
          .then(function (text) {
            const data = JSON.parse(text);
            dispatch(apiAction.updateMainPlaylistSuccess(data));
          })
          .catch(function () {
            dispatch(apiAction.updateMainPlaylistFail());
          });
      }
    }
  },
  updateMainPlaylistRequest: function (data) {
    return {
      type: actionTypes.API.UPDATE_MAIN_PLAYLIST_REQUEST,
      source: actionSources.BY_SYSTEM,
      data: data
    };
  },
  updateMainPlaylistSuccess: function (data) {
    return {
      type: actionTypes.API.UPDATE_MAIN_PLAYLIST_SUCCESS,
      source: actionSources.BY_SYSTEM,
      data: data
    };
  },
  updateMainPlaylistFail: function () {
    return {
      type: actionTypes.API.UPDATE_MAIN_PLAYLIST_FAIL,
      source: actionSources.BY_SYSTEM,
      data: null
    };
  }
}


export default apiAction;
