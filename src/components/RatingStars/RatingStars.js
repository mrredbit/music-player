import React from 'react';
import styles from './RatingStars.css';

class RatingStars extends React.Component {

  render() {
    const props = this.props;
    const rating = props.track.rating;
    const stars = [];
    let className;

    if (props.readonly) {
      // Render readonly stars
      for (let i = 0; i < 10; i++) {
        className = styles({
          readonlyStar: true,
          odd: i % 2 !== 0,
          ratedAt: i === (rating * 2) - 1,
          full: i <= (rating * 2) - 1
        });
        stars.push(<div key={i} className={className}/>);
      }
    } else {
      // Render rating stars with hover and rating actions
      for (let i = 9; i >= 0; i--) {
        const rate = (i + 1) / 2;
        className = styles({
          star: true,
          odd: i % 2 !== 0,
          ratedAt: i === (rating * 2) - 1
        });
        stars.push(<div key={i}
                        title={ rate + ' Star'}
                        onClick={props.onRateTrack.bind(null, props.track, props.playQueue, props.musicLib, rate)}
                        className={className}/>);
      }
    }

    return <div className={styles.index}>
      {stars}
    </div>
  }
}

RatingStars.defaultProps = {};

export default RatingStars;
