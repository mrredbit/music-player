import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import actions from '../../src/actions/apiActions';
import actionTypes from '../../src/const/actionTypes';
import actionSources from '../../src/const/actionSources';
import constant from '../../src/const/general';
import config from 'config';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

/**
 * Test Async Action Creators
 */
describe('Action Creators', () => {
  describe('apiActions', () => {
    describe('getMusicLibTracks', () => {
      const musicTracks = [
        {
          "artist": "Solu Music",
          "artwork_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/200x200bb.jpg",
          "artwork_thumbnail_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/100x100bb.jpg",
          "duration": 59,
          "id": 27611,
          "track_path": "http://localhost:5000/Allegro from Duet in C Major.mp3",
          "title": "Fade (feat Kimblee - Fuchse remix)",
          "genre": "Trance",
          "rating": 3.5
        },
        {
          "artist": "Freemasons",
          "artwork_url": "http://is1.mzstatic.com/image/pf/us/r30/Music6/v4/af/55/d1/af55d163-55af-4cfe-abe1-a3d682f927df/cover.200x200-75.jpg",
          "artwork_thumbnail_url": "http://is1.mzstatic.com/image/pf/us/r30/Music6/v4/af/55/d1/af55d163-55af-4cfe-abe1-a3d682f927df/cover.100x100-75.jpg",
          "duration": 90,
          "id": 29944,
          "track_path": "http://localhost:5000/Canon.mp3",
          "title": "Tears (Club Mix)",
          "genre": "House",
          "rating": 2
        },
        {
          "artist": "Foamo",
          "artwork_url": "http://is2.mzstatic.com/image/pf/us/r30/Music2/v4/5d/31/63/5d316388-7517-c479-022b-2c5001121007/800071003029_Cover.200x200-75.jpg",
          "artwork_thumbnail_url": "http://is2.mzstatic.com/image/pf/us/r30/Music2/v4/5d/31/63/5d316388-7517-c479-022b-2c5001121007/800071003029_Cover.100x100-75.jpg",
          "duration": 59,
          "id": 39717,
          "track_path": "http://localhost:5000/Allegro from Duet in C Major.mp3",
          "title": "Release Me (feat. Lotti)",
          "genre": "Pop",
          "rating": 0
        },
        {
          "artist": "Rihanna",
          "artwork_url": "http://is4.mzstatic.com/image/thumb/Music4/v4/10/18/22/101822dd-573b-6f6a-461b-4a989979b7b5/source/200x200bb.jpg",
          "artwork_thumbnail_url": "http://is4.mzstatic.com/image/thumb/Music4/v4/10/18/22/101822dd-573b-6f6a-461b-4a989979b7b5/source/100x100bb.jpg",
          "duration": 59,
          "id": 39718,
          "track_path": "http://localhost:5000/Allegro from Duet in C Major.mp3",
          "title": "Right Now (Ralphi Rosario Radio Edit)",
          "genre": "House",
          "rating": 2.5
        },
        {
          "artist": "The Beatles",
          "artwork_url": "http://is3.mzstatic.com/image/thumb/Music/v4/98/10/bd/9810bd86-9023-fb20-c6d8-d15e6a25222e/source/200x200bb.jpg",
          "artwork_thumbnail_url": "http://is3.mzstatic.com/image/thumb/Music/v4/98/10/bd/9810bd86-9023-fb20-c6d8-d15e6a25222e/source/100x100bb.jpg",
          "duration": 90,
          "id": 58791,
          "track_path": "http://localhost:5000/Canon.mp3",
          "title": "Love Me Do",
          "genre": "Rock",
          "rating": 1.5
        }
      ];

      const initialStore = {
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
        mode: constant.PLAYER_MODE.MUSIC_LIB
      };

      afterEach(() => {
        fetchMock.restore();
      })

      it('creates GET_MUSIC_LIB_TRACKS_SUCCESS when fetching music tracks is success', () => {
        fetchMock.get(config.api.urlBase + 'tracks', {
          status: 200,
          body: musicTracks
        });


        const expectedActions = [
          {
            type: actionTypes.API.GET_MUSIC_LIB_TRACKS_REQUEST,
            source: actionSources.BY_SYSTEM,
            data: null
          },
          {
            type: actionTypes.API.GET_MUSIC_LIB_TRACKS_SUCCESS,
            source: actionSources.BY_SYSTEM,
            data: {
              tracks: musicTracks
            }
          }
        ]

        const store = mockStore(initialStore);

        return store.dispatch(actions.getMusicLibTracks())
          .then(() => {
            expect(store.getActions()).to.eql(expectedActions)
          })
      })

      it('creates GET_MUSIC_LIB_TRACKS_FAIL when fetching music tracks is failed', () => {
        fetchMock.get(config.api.urlBase + 'tracks', {
          status: 500,
          body: {
            error: 'Internal Server Error'
          }
        });


        const expectedActions = [
          {
            type: actionTypes.API.GET_MUSIC_LIB_TRACKS_REQUEST,
            source: actionSources.BY_SYSTEM,
            data: null
          },
          {
            type: actionTypes.API.GET_MUSIC_LIB_TRACKS_FAIL,
            source: actionSources.BY_SYSTEM,
            data: null
          }
        ]

        const store = mockStore(initialStore);

        return store.dispatch(actions.getMusicLibTracks())
          .then(() => {
            console.log(store.getActions());
            expect(store.getActions()).to.eql(expectedActions)
          })
      })
    })
  })
})

// @TODO Not yet finished, but all api test should be fairly similar
