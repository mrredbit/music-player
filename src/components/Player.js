import 'normalize.css/normalize.css';
import 'styles/global/general.css';

import React from 'react';
import constant from '../const/general';

import PlayerControl from '../containers/PlayerControl';
import TrackList from '../containers/TrackList';


import styles from '../styles/Player.css';

class Player extends React.Component {
  render() {
    const props = this.props;

    const tabMusicLibClassName = styles({
      playerTab: true,
      active: props.view === constant.PLAYER_VIEW.MUSIC_LIB
    });

    const tabPlayQueueClassName = styles({
      playerTab: true,
      active: props.view === constant.PLAYER_VIEW.PLAY_QUEUE
    });

    let trackList;
    switch (props.view) {
      case constant.PLAYER_VIEW.PLAY_QUEUE:
        trackList = <TrackList tracks={props.playQueue.items}
                               title="Next Songs"
                               isError={props.playQueue.isError}/>;
        break;
      case constant.PLAYER_VIEW.MUSIC_LIB:
      default:
        trackList = <TrackList tracks={props.musicLib.tracks}
                               title="All Tracks"
                               isError={props.musicLib.isError}/>;
        break;
    }

    return (
      <div className={styles.index}>
        <div className={styles.mainContainer}>
          <div>
            <div className={styles.playerTabContainer}>
              <div className={tabMusicLibClassName}
                   onClick={props.onViewSwitchClick.bind(null, {view: constant.PLAYER_VIEW.MUSIC_LIB})}>
                <div className={styles.tabName}>My Library</div>
              </div>
              <div className={tabPlayQueueClassName}
                   onClick={props.onViewSwitchClick.bind(null, {view: constant.PLAYER_VIEW.PLAY_QUEUE})}>
                <div className={styles.tabName}>Play Queue</div>
              </div>
            </div>
          </div>
          <div className={styles.trackListContainer}>
            {trackList}
          </div>
        </div>
        <PlayerControl/>
      </div>
    );
  }
}

Player.defaultProps = {};

export default Player;
