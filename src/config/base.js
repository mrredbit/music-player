'use strict';

// Settings configured here will be merged into the final config object.
export default {
  api: {
    urlBase: 'http://localhost:5000/api/v1/'
    // urlBase: 'http://35.185.70.59:3000/api/v1/' // Production Url (leave here for local testing toward production server)
  },
  app: {
    maxHistory: 10
  }
}
