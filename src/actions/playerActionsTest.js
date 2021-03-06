/*global expect*/

import actions from '../../src/actions/playerActions';
import actionTypes from '../../src/const/actionTypes';
import actionSources from '../../src/const/actionSources';
import constant from '../../src/const/general';

/**
 * Test Action Creators
 */
describe('Action Creators', ()=> {
  describe('playerActions', ()=> {
    describe('switchMode', () => {
      it('should create an action', () => {
        var data = {mode: constant.PLAYER_VIEW.PLAY_QUEUE};
        var expectedAction = {
          type: actionTypes.PLAYER.SWITCH_VIEW,
          source: actionSources.BY_USER,
          data: data
        }
        expect(actions.switchView(data)).to.eql(expectedAction);
      })
    })
  })
})
