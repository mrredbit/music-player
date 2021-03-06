/*global expect*/

import actions from '../../src/actions/playerControlActions';
import actionTypes from '../../src/const/actionTypes';
import actionSources from '../../src/const/actionSources';

/**
 * Test Action Creators
 */
describe('Action Creators', ()=> {
  describe('playerControlActions', ()=> {
    const playQueue = {
      id: 1,
      name: 'Main',
      items: [],
      historyItems: [],
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
        expect(actions.prev(playQueue)).to.eql(expectedAction);
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

