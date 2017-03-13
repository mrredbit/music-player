import 'whatwg-fetch';

import config from 'config';

export default {
  getTracks: function () {
    const url = config.api.urlBase + 'tracks';
    return fetch(url, {
      method: 'GET'
    });
  },
  updateTrack: function (track) {
    const url = config.api.urlBase + 'tracks/'+ track.id;
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(track)
    });
  }
}
