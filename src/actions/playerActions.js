import actionTypes from '../const/actionTypes';
import actionSources from '../const/actionSources';

export default {
  switchView: function (data) {
    return {
      type: actionTypes.PLAYER.SWITCH_VIEW,
      source: actionSources.BY_USER,
      data: data
    };
  }
}
