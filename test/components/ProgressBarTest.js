import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from '../../src/components/ProgressBar';
import styles from '../../src/styles/ProgressBar.css';


describe('Components', () => {
  describe('ProgressBar', () => {
    it('should render correctly', () => {
      const props = {
        playingTimePosition: 50,
        trackDuration: 113
      }
      const enzymeWrapper = shallow(<ProgressBar {...props} />)
      // Render every elements
      expect(enzymeWrapper.find(`.${styles.index}`).length).to.eql(1);
      expect(enzymeWrapper.find(`.${styles.index}`).length).to.eql(1);
      expect(enzymeWrapper.find(`.${styles.playingTimePosition}`).length).to.eql(1);
      expect(enzymeWrapper.find(`.${styles.trackDuration}`).length).to.eql(1);
      expect(enzymeWrapper.find(`.${styles.progressBar}`).length).to.eql(1);
      expect(enzymeWrapper.find(`.${styles.progress}`).length).to.eql(1);

      // Render the correct time format
      expect(enzymeWrapper.find(`.${styles.playingTimePosition}`).text()).to.eql('0:50');
      expect(enzymeWrapper.find(`.${styles.trackDuration}`).text()).to.eql('1:53');
    })
  })
})
