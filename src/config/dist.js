'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dist',
  api: {
    urlBase: 'http://35.185.70.59:3000/api/v1/' // "Product" server on Google micro instance
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
