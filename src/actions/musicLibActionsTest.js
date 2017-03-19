/*global expect*/

import actions from '../../src/actions/musicLibActions';
import actionTypes from '../../src/const/actionTypes';
import actionSources from '../../src/const/actionSources';

/**
 * Test Action Creators
 */
describe('Action Creators', ()=> {
  describe('musicLibActions', () => {
    describe('addTrackToQueue', () => {
      it('should create an action', () => {
        const track = {
          'artist': 'Solu Music',
          'artwork_url': 'http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/200x200bb.jpg',
          'artwork_thumbnail_url': 'http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/100x100bb.jpg',
          'duration': 59,
          'id': 27611,
          'track_path': 'http://localhost:5000/Allegro from Duet in C Major.mp3',
          'title': 'Fade (feat Kimblee - Fuchse remix)',
          'genre': 'Trance',
          'rating': 3.5
        };

        const playQueue = {
          id: 1,
          name: 'Main',
          items: [],
          historyItems: [],
          isLoading: false,
          isError: false
        };

        const expectedAction = {
          type: actionTypes.MUSIC_LIB.ADD_TRACK_TO_QUEUE,
          source: actionSources.BY_USER,
          data: {track: track}
        }
        expect(actions.addTrackToQueue(track, playQueue)).to.eql(expectedAction);
      })
    })
  })
})
