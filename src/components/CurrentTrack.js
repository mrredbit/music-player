import React from 'react';
import styles from '../styles/CurrentTrack.css';

import RatingStars from '../containers/RatingStars';

import moment from 'moment';
import 'moment-duration-format';

class CurrentTrack extends React.Component {
  render() {
    const props = this.props;
    const track = props.track;
    return (<div className={styles.index}>
        <img src={track.artwork_url} className={styles.artwork}/>
        <div className={styles.mainContainer}>
          <div className={styles.nowPlaying}>Now playing</div>
          <div className={styles.title}>{track.title}</div>
          <div className={styles.artist}>{track.artist}</div>
          <div className={styles.infoContainer}>
            <div className={styles.genre}>{track.genre}</div>
            <div className={styles.duration}>{moment.duration(track.duration, 'seconds').format('m:ss', {trim: false})}</div>
            <RatingStars className={styles.rating} track={track}/>
          </div>
        </div>
      </div>
    );
  }
}

CurrentTrack.defaultProps = {

};

export default CurrentTrack;
