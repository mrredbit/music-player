import React from 'react';
import ProgressBar from '../components/ProgressBar';

/* Just a plain container wrapper for ProgressBar component */
var ProgressBarContainer = function (props) {
  return <ProgressBar {...props}/>;
}

export default ProgressBarContainer;
