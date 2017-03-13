import 'whatwg-fetch';

import config from 'config';

export default {
  getMainPlaylistTracks: function () {
    // @TODO Main playlist is hardcoded as id "1", add create playlist feature and make this id dynamic in the future
    const url = config.api.urlBase + 'playlists/1';
    return fetch(url, {
      method: 'GET'
    });
  },
  updateMainPlaylist: function (playlist) {
    // @TODO Main playlist is hardcoded as id "1", add create playlist feature and make this id dynamic in the future
    const url = config.api.urlBase + 'playlists/1';
    const newPlaylist = {
      id: playlist.id,
      name: playlist.name,
      items: playlist.items,
      historyItems: playlist.historyItems
    };
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlaylist)
    });
  }
}
