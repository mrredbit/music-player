import React from 'react';
import styles from '../styles/ProgressBar.css';

import moment from 'moment';
import 'moment-duration-format';

class ProgressBar extends React.Component {
  render() {
    const props = this.props;
    let playedPercentage = 0;

    if (props.playingTimePosition && props.trackDuration) {
      playedPercentage = props.playingTimePosition / props.trackDuration * 100;
    }

    return (
      <div className={styles.index}>
        <div className={styles.timeContainer}>
          <div className={styles.playingTimePosition}>{moment.duration(props.playingTimePosition, 'seconds').format('m:ss', {trim: false})}</div>
          <div className={styles.trackDuration}>{moment.duration(props.trackDuration, 'seconds').format('m:ss', {trim: false})}</div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{width: playedPercentage + '%'}}/>
        </div>
      </div>
    );
  }
}

ProgressBar.defaultProps = {};

export default ProgressBar;
