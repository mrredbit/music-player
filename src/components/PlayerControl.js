import React from 'react';

import constant from '../const/general';

import styles from '../styles/PlayerControl.css';
import ProgressBar from '../containers/ProgressBar';

import imgPlay from '../images/PlayerControl/play.svg';
import imgPause from '../images/PlayerControl/pause.svg';
import imgPrev from '../images/PlayerControl/prev.svg';
import imgNext from '../images/PlayerControl/next.svg';

const playingState = constant.PLAYING_STATE;

class PlayerControl extends React.Component {
  render() {
    const props = this.props;
    let title, artist;
    const isPlaying = props.playerControl.playingState === playingState.PLAYING;

    const currentTrack = props.playQueue.items.length && props.playQueue.items[0];
    if (currentTrack) {
      title = <div className={styles.title}>{currentTrack.title}</div>;
      artist = <div className={styles.artist}>{currentTrack.artist}</div>;
    }

    const classNamePrevButton = styles({
      btnPrev: true,
      disabled: !props.playQueue.historyItems.length
    });
    const classNamePlayPauseButton = styles({
      btnPlayPause: true,
      disabled: !currentTrack
    });
    const classNameNextButton = styles({
      btnNext: true,
      disabled: !props.playQueue.items.length
    });

    const imgPlayPause = isPlaying ? imgPause : imgPlay;

    return (
      <div className={styles.index}>
        <div className={styles.mainContainer}>
          <div className={styles.btnContainer}>
            {title}
            <img src={imgPrev} className={classNamePrevButton}
                 onClick={props.onPrevClick.bind(null, props.playQueue)}/>
            <img src={imgPlayPause } className={classNamePlayPauseButton} onClick={props.onPlayPauseClick}/>
            <img src={imgNext} className={classNameNextButton}
                 onClick={props.onNextClick.bind(null, props.playQueue)} disabled={!!currentTrack}/>
            {artist}
          </div>
          <ProgressBar playingTimePosition={props.playerControl.playingTimePosition}
                       trackDuration={props.playerControl.trackDuration}/>
        </div>
      </div>
    );
  }
}

PlayerControl.defaultProps = {};

export default PlayerControl;
