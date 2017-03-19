/*global expect*/

import reducer from '../../src/reducers/playerReducer';
import constant from '../../src/const/general';
import actionTypes from '../../src/const/actionTypes'

describe('Reducer', ()=> {
  describe('player reducer', () => {
    const initialState = {
      playerControl: {
        playingTimePosition: 0,
        trackDuration: 0,
        playingState: constant.PLAYING_STATE.PAUSED
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


    it('should return the initial state', () => {
      expect(
        reducer(undefined, {})
      ).to.eql(initialState)
    })

    it('should handle GET_MUSIC_LIB_TRACKS_REQUEST to show loading state', () => {
      const expectedState = {
        playerControl: {
          playingTimePosition: 0,
          trackDuration: 0,
          playingState: constant.PLAYING_STATE.PAUSED
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
          isLoading: true, // expected to be changed
          isError: false
        },
        view: constant.PLAYER_VIEW.MUSIC_LIB
      };
      expect(
        reducer(initialState, {
          type: actionTypes.API.GET_MUSIC_LIB_TRACKS_REQUEST,
          data: null
        })
      ).to.eql(expectedState)
    })

    it('should handle GET_MUSIC_LIB_TRACKS_SUCCESS to update music lib list', () => {
      const responseData = [
        {
          'artist': 'Solu Music',
          'artwork_url': 'http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/200x200bb.jpg',
          'artwork_thumbnail_url': 'http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/100x100bb.jpg',
          'duration': 59,
          'id': 27611,
          'track_path': 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3',
          'title': 'Fade (feat Kimblee - Fuchse remix)',
          'genre': 'Trance',
          'rating': 0
        },
        {
          'artist': 'Freemasons',
          'artwork_url': 'http://is1.mzstatic.com/image/pf/us/r30/Music6/v4/af/55/d1/af55d163-55af-4cfe-abe1-a3d682f927df/cover.200x200-75.jpg',
          'artwork_thumbnail_url': 'http://is1.mzstatic.com/image/pf/us/r30/Music6/v4/af/55/d1/af55d163-55af-4cfe-abe1-a3d682f927df/cover.100x100-75.jpg',
          'duration': 91,
          'id': 29944,
          'track_path': 'http://www.stephaniequinn.com/Music/Canon.mp3',
          'title': 'Tears (Club Mix)',
          'genre': 'House',
          'rating': 0
        },
        {
          'artist': 'Foamo',
          'artwork_url': 'http://is2.mzstatic.com/image/pf/us/r30/Music2/v4/5d/31/63/5d316388-7517-c479-022b-2c5001121007/800071003029_Cover.200x200-75.jpg',
          'artwork_thumbnail_url': 'http://is2.mzstatic.com/image/pf/us/r30/Music2/v4/5d/31/63/5d316388-7517-c479-022b-2c5001121007/800071003029_Cover.100x100-75.jpg',
          'duration': 84,
          'id': 39717,
          'track_path': 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2011.mp3',
          'title': 'Release Me (feat. Lotti)',
          'genre': 'Pop',
          'rating': 0
        },
        {
          'artist': 'Rihanna',
          'artwork_url': 'http://is4.mzstatic.com/image/thumb/Music4/v4/10/18/22/101822dd-573b-6f6a-461b-4a989979b7b5/source/200x200bb.jpg',
          'artwork_thumbnail_url': 'http://is4.mzstatic.com/image/thumb/Music4/v4/10/18/22/101822dd-573b-6f6a-461b-4a989979b7b5/source/100x100bb.jpg',
          'duration': 59,
          'id': 39718,
          'track_path': 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2013.mp3',
          'title': 'Right Now (Ralphi Rosario Radio Edit)',
          'genre': 'House',
          'rating': 0
        },
        {
          'artist': 'The Beatles',
          'artwork_url': 'http://is3.mzstatic.com/image/thumb/Music/v4/98/10/bd/9810bd86-9023-fb20-c6d8-d15e6a25222e/source/200x200bb.jpg',
          'artwork_thumbnail_url': 'http://is3.mzstatic.com/image/thumb/Music/v4/98/10/bd/9810bd86-9023-fb20-c6d8-d15e6a25222e/source/100x100bb.jpg',
          'duration': 113,
          'id': 58791,
          'track_path': 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2004.mp3',
          'title': 'Love Me Do',
          'genre': 'Rock',
          'rating': 5
        }
      ];
      const currentState = {
        playerControl: {
          playingTimePosition: 0,
          trackDuration: 0,
          playingState: constant.PLAYING_STATE.PAUSED
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
          isLoading: true,
          isError: false
        },
        view: constant.PLAYER_VIEW.MUSIC_LIB
      };
      const expectedState = {
        playerControl: {
          playingTimePosition: 0,
          trackDuration: 0,
          playingState: constant.PLAYING_STATE.PAUSED
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
          tracks: [
            {
              'artist': 'Solu Music',
              'artwork_url': 'http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/200x200bb.jpg',
              'artwork_thumbnail_url': 'http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/100x100bb.jpg',
              'duration': 59,
              'id': 27611,
              'track_path': 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3',
              'title': 'Fade (feat Kimblee - Fuchse remix)',
              'genre': 'Trance',
              'rating': 0
            },
            {
              'artist': 'Freemasons',
              'artwork_url': 'http://is1.mzstatic.com/image/pf/us/r30/Music6/v4/af/55/d1/af55d163-55af-4cfe-abe1-a3d682f927df/cover.200x200-75.jpg',
              'artwork_thumbnail_url': 'http://is1.mzstatic.com/image/pf/us/r30/Music6/v4/af/55/d1/af55d163-55af-4cfe-abe1-a3d682f927df/cover.100x100-75.jpg',
              'duration': 91,
              'id': 29944,
              'track_path': 'http://www.stephaniequinn.com/Music/Canon.mp3',
              'title': 'Tears (Club Mix)',
              'genre': 'House',
              'rating': 0
            },
            {
              'artist': 'Foamo',
              'artwork_url': 'http://is2.mzstatic.com/image/pf/us/r30/Music2/v4/5d/31/63/5d316388-7517-c479-022b-2c5001121007/800071003029_Cover.200x200-75.jpg',
              'artwork_thumbnail_url': 'http://is2.mzstatic.com/image/pf/us/r30/Music2/v4/5d/31/63/5d316388-7517-c479-022b-2c5001121007/800071003029_Cover.100x100-75.jpg',
              'duration': 84,
              'id': 39717,
              'track_path': 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2011.mp3',
              'title': 'Release Me (feat. Lotti)',
              'genre': 'Pop',
              'rating': 0
            },
            {
              'artist': 'Rihanna',
              'artwork_url': 'http://is4.mzstatic.com/image/thumb/Music4/v4/10/18/22/101822dd-573b-6f6a-461b-4a989979b7b5/source/200x200bb.jpg',
              'artwork_thumbnail_url': 'http://is4.mzstatic.com/image/thumb/Music4/v4/10/18/22/101822dd-573b-6f6a-461b-4a989979b7b5/source/100x100bb.jpg',
              'duration': 59,
              'id': 39718,
              'track_path': 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2013.mp3',
              'title': 'Right Now (Ralphi Rosario Radio Edit)',
              'genre': 'House',
              'rating': 0
            },
            {
              'artist': 'The Beatles',
              'artwork_url': 'http://is3.mzstatic.com/image/thumb/Music/v4/98/10/bd/9810bd86-9023-fb20-c6d8-d15e6a25222e/source/200x200bb.jpg',
              'artwork_thumbnail_url': 'http://is3.mzstatic.com/image/thumb/Music/v4/98/10/bd/9810bd86-9023-fb20-c6d8-d15e6a25222e/source/100x100bb.jpg',
              'duration': 113,
              'id': 58791,
              'track_path': 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2004.mp3',
              'title': 'Love Me Do',
              'genre': 'Rock',
              'rating': 5
            }
          ], // expected to be changed
          isLoading: false, // expected to be changed
          isError: false
        },
        view: constant.PLAYER_VIEW.MUSIC_LIB
      };
      expect(
        reducer(currentState, {
          type: actionTypes.API.GET_MUSIC_LIB_TRACKS_SUCCESS,
          data: {tracks: responseData}
        })
      ).to.eql(expectedState)
    })

    it('should handle GET_MUSIC_LIB_TRACKS_FAIL to set isError flag', () => {
      const currentState = {
        playerControl: {
          playingTimePosition: 0,
          trackDuration: 0,
          playingState: constant.PLAYING_STATE.PAUSED
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
          isLoading: true,
          isError: false
        },
        view: constant.PLAYER_VIEW.MUSIC_LIB
      };
      const expectedState = {
        playerControl: {
          playingTimePosition: 0,
          trackDuration: 0,
          playingState: constant.PLAYING_STATE.PAUSED
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
          isLoading: false, // expected to be changed
          isError: true // expected to be changed
        },
        view: constant.PLAYER_VIEW.MUSIC_LIB
      };
      expect(
        reducer(currentState, {
          type: actionTypes.API.GET_MUSIC_LIB_TRACKS_FAIL,
          data: null
        })
      ).to.eql(expectedState)
    })
  })
})
