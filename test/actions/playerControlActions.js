import actions from '../../src/actions/playerControlActions';
import actionTypes from '../../src/const/actionTypes';
import actionSources from '../../src/const/actionSources';

/**
 * Test Action Creators
 */
describe('Action Creators', ()=> {
  describe('playerControlActions', ()=> {
    const track = {
      "artist": "Solu Music",
      "artwork_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/200x200bb.jpg",
      "artwork_thumbnail_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/100x100bb.jpg",
      "duration": 59,
      "id": 27611,
      "track_path": "http://localhost:5000/Allegro from Duet in C Major.mp3",
      "title": "Fade (feat Kimblee - Fuchse remix)",
      "genre": "Trance",
      "rating": 3.5
    };

    const playQueue = {
      id: 1,
      name: 'Main',
      items: [],
      historyItems: [],
      isLoading: false,
      isError: false
    };

    const musicLib = {
      tracks: [],
      isLoading: false,
      isError: false
    };

    describe('playPause', () => {
      it('should create an action', () => {
        var expectedAction = {
          type: actionTypes.PLAYER_CONTROL.PLAY_PAUSE,
          source: actionSources.BY_USER,
          data: null
        }
        expect(actions.playPause()).to.eql(expectedAction);
      })
    })

    describe('play', () => {
      it('should create an action', () => {
        var expectedAction = {
          type: actionTypes.PLAYER_CONTROL.PLAY,
          source: actionSources.BY_USER,
          data: null
        }
        expect(actions.play()).to.eql(expectedAction);
      })
    })

    describe('pause', () => {
      it('should create an action', () => {
        var expectedAction = {
          type: actionTypes.PLAYER_CONTROL.PAUSE,
          source: actionSources.BY_USER,
          data: null
        }
        expect(actions.pause()).to.eql(expectedAction);
      })
    })

    describe('played', () => {
      it('should create an action', () => {
        var expectedAction = {
          type: actionTypes.PLAYER_CONTROL.PLAYED,
          source: actionSources.BY_SYSTEM,
          data: null
        }
        expect(actions.played()).to.eql(expectedAction);
      })
    })

    describe('paused', () => {
      it('should create an action', () => {
        var expectedAction = {
          type: actionTypes.PLAYER_CONTROL.PAUSED,
          source: actionSources.BY_SYSTEM,
          data: null
        }
        expect(actions.paused(playQueue)).to.eql(expectedAction);
      })
    })

    describe('prev', () => {
      it('should create an action', () => {
        var expectedAction = {
          type: actionTypes.PLAYER_CONTROL.PREV,
          source: actionSources.BY_USER,
          data: null
        }
        expect(actions.prev()).to.eql(expectedAction);
      })
    })

    describe('next', () => {
      it('should create an action', () => {
        var expectedAction = {
          type: actionTypes.PLAYER_CONTROL.NEXT,
          source: actionSources.BY_USER,
          data: null
        }
        expect(actions.next(playQueue)).to.eql(expectedAction);
      })
    })

    describe('ended', () => {
      it('should create an action', () => {
        var expectedAction = {
          type: actionTypes.PLAYER_CONTROL.ENDED,
          source: actionSources.BY_SYSTEM,
          data: null
        }
        expect(actions.ended(playQueue)).to.eql(expectedAction);
      })
    })

    describe('updateTimePosition', () => {
      it('should create an action', () => {
        const data = {
          playingTimePosition: 3.31,
          trackDuration: 50
        }
        var expectedAction = {
          type: actionTypes.PLAYER_CONTROL.UPDATE_TIME_POS,
          source: actionSources.BY_SYSTEM,
          data: data
        }
        expect(actions.updateTimePosition(data)).to.eql(expectedAction);
      })
    })

  })
})

