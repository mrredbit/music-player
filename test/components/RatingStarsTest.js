import React from 'react';
import {shallow} from 'enzyme';
import RatingStars from '../../src/components/RatingStars';
import styles from '../../src/styles/RatingStars.css';
import sinon from 'sinon';


describe('Components', () => {
  describe('RatingStars', () => {
    const props = {
      readonly: false,
      track: {
        "artist": "Solu Music",
        "artwork_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/200x200bb.jpg",
        "artwork_thumbnail_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/100x100bb.jpg",
        "duration": 59,
        "id": "8d6d5b12-b749-4192-8b8b-4d587016df57",
        "track_path": "http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3",
        "title": "Fade (feat Kimblee - Fuchse remix)",
        "genre": "Trance",
        "rating": 0,
        "trackId": 27611
      },
      musicLib: {
        tracks: [{
          "artist": "Solu Music",
          "artwork_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/200x200bb.jpg",
          "artwork_thumbnail_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/100x100bb.jpg",
          "duration": 59,
          "id": 27611,
          "track_path": "http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3",
          "title": "Fade (feat Kimblee - Fuchse remix)",
          "genre": "Trance",
          "rating": 0
        }, {
          "artist": "Freemasons",
          "artwork_url": "http://is1.mzstatic.com/image/pf/us/r30/Music6/v4/af/55/d1/af55d163-55af-4cfe-abe1-a3d682f927df/cover.200x200-75.jpg",
          "artwork_thumbnail_url": "http://is1.mzstatic.com/image/pf/us/r30/Music6/v4/af/55/d1/af55d163-55af-4cfe-abe1-a3d682f927df/cover.100x100-75.jpg",
          "duration": 91,
          "id": 29944,
          "track_path": "http://www.stephaniequinn.com/Music/Canon.mp3",
          "title": "Tears (Club Mix)",
          "genre": "House",
          "rating": 0
        }, {
          "artist": "Foamo",
          "artwork_url": "http://is2.mzstatic.com/image/pf/us/r30/Music2/v4/5d/31/63/5d316388-7517-c479-022b-2c5001121007/800071003029_Cover.200x200-75.jpg",
          "artwork_thumbnail_url": "http://is2.mzstatic.com/image/pf/us/r30/Music2/v4/5d/31/63/5d316388-7517-c479-022b-2c5001121007/800071003029_Cover.100x100-75.jpg",
          "duration": 84,
          "id": 39717,
          "track_path": "http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2011.mp3",
          "title": "Release Me (feat. Lotti)",
          "genre": "Pop",
          "rating": 0
        }],
        isLoading: false,
        isError: false
      },
      playQueue: {
        id: 1,
        name: 'Main',
        items: [{
          "artist": "Solu Music",
          "artwork_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/200x200bb.jpg",
          "artwork_thumbnail_url": "http://is3.mzstatic.com/image/thumb/Music69/v4/eb/2d/60/eb2d60f4-3e8c-a69c-07ed-f8ee0c1cc123/source/100x100bb.jpg",
          "duration": 59,
          "id": "8d6d5b12-b749-4192-8b8b-4d587016df57",
          "track_path": "http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3",
          "title": "Fade (feat Kimblee - Fuchse remix)",
          "genre": "Trance",
          "rating": 0,
          "trackId": 27611
        }],
        historyItems: [],
        isLoading: false,
        isError: false
      },
      onRateTrack: sinon.spy()
    }

    const enzymeWrapper = shallow(<RatingStars {...props} />)

    it('should render correctly', () => {
      expect(enzymeWrapper.find(`.${styles.index}`).length).to.eql(1);
        expect(enzymeWrapper.find(`.${styles.star}`).length).to.eql(10); // should found 10 half stars
    })

    it('should handle click correctly', () => {
      enzymeWrapper.find({title: '2.5 Star'}).simulate('click'); // Click
      expect(props.onRateTrack.calledOnce).to.eql(true); // Action called after click
      expect(props.onRateTrack.calledWith(props.track, props.playQueue, props.musicLib, 2.5)).to.eql(true); // Clicked with correct parameters
      enzymeWrapper.find({title: '2.5 Star'}).simulate('click'); // Click
      expect(props.onRateTrack.callCount).to.eql(2); // Action can be called for multiple times
    })
  })
})
