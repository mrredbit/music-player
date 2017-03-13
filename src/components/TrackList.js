import React from 'react';
import constant from '../const/general';

import CurrentTrack from '../containers/CurrentTrack';
import RatingStar from '../containers/RatingStars';

import styles from '../styles/TrackList.css';
import imgAddButton from '../images/TrackList/add.svg';
import imgRemoveButton from '../images/TrackList/remove.svg';
import imgMusic from '../images/TrackList/music.svg';

import moment from 'moment';
import 'moment-duration-format';


class TrackList extends React.Component {

  render() {
    const props = this.props;
    let tracks = props.tracks;
    const hasTrack = tracks.length;
    const isMusicLib = props.playerView === constant.PLAYER_VIEW.MUSIC_LIB;
    const isPlayQueue = props.playerView === constant.PLAYER_VIEW.PLAY_QUEUE;
    const currentTrack = tracks.length && tracks[0];

    let currentTrackContainer;
    if (isPlayQueue) {
      if (currentTrack) {
        currentTrackContainer = <CurrentTrack track={currentTrack}/>;
        tracks = props.playQueue.items.slice(1);// Remove first track in the queue as it shown in another component
      }
    }

    let emptyState, errorState, list;
    if (props.isError) {
      errorState = (<div className={styles.messageContainer}>
        <img src={imgMusic} className={styles.musicIcon}/>
        <div className={styles.messageHeading}>Oops...Something happened</div>
        <div className={styles.messageSubHeading}>There are some issues when loading playlist, please refresh and try again.</div>
      </div>);
    }
    else if (props.playerView === constant.PLAYER_VIEW.PLAY_QUEUE && !hasTrack) {
      emptyState = (<div className={styles.messageContainer}>
        <img src={imgMusic} className={styles.musicIcon}/>
        <div className={styles.messageHeading}>No songs in the queue yet</div>
        <div className={styles.messageSubHeading}>Click + in the music library to add songs from the library.</div>
        <button className={styles.messageActionBtn}
                onClick={props.onViewSwitchClick.bind(null, {view: constant.PLAYER_VIEW.MUSIC_LIB})}>Add song from
          library
        </button>
      </div>);
    } else {
      list = <div>
        {currentTrackContainer}
        <div className={styles.title}>{props.title}</div>
        <div className={styles.headerContainer}>
          <div className={styles.colNumber}>#</div>
          <div className={styles.colActionButton}></div>
          <div className={styles.colTitle}>Song</div>
          <div className={styles.colArtist}>Artist</div>
          <div className={styles.colDuration}>Duration</div>
          <div className={styles.colGenre}>Genre</div>
          <div className={styles.colRating}>Rating</div>
        </div>

        <div className={styles.trackListContainer}>
          {tracks.map((track, index)=> {
            return <div key={track.id} className={styles.trackContainer}>
              <div className={styles.colNumber}>{index + 1}</div>
              <div className={styles.colActionButton}>
                {
                  isMusicLib && <img className={styles.trackListItemAction}
                                     onClick={props.onAddTrackClick.bind(null, track, props.playQueue)}
                                     src={imgAddButton}/>
                }
                {
                  isPlayQueue && <img className={styles.trackListItemAction}
                                      onClick={props.onRemoveTrackClick.bind(null, track.id, props.playQueue)}
                                      src={imgRemoveButton}/>
                }
              </div>
              <div className={styles.colTitle}>{track.title}</div>
              <div className={styles.colArtist}>{track.artist}</div>
              <div
                className={styles.colDuration}>{moment.duration(track.duration, 'seconds').format('m:ss', {trim: false})}</div>
              <div className={styles.colGenre}>{track.genre}</div>
              <div className={styles.colRating}><RatingStar track={track} readonly/></div>
            </div>
          })}
        </div>
      </div>
    }


    return <div className={styles.index}>
      {emptyState}
      {errorState}
      {list}
    </div>
  }
}

TrackList.defaultProps = {
  isError: false
};

export default TrackList;
