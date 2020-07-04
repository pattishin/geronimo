'use strict';

require('../styles/index.css');
require('../styles/dashboard.css');
require('../styles/explorer.css');
require('../styles/forms.css');

const Dashboard = require('./dashboard/dashboard.js');

// Polyfilling promises and fetch for
var Promise = require('promise-polyfill');
require("whatwg-fetch");

if (!window.Promise) {
  window.Promise = Promise;
}

/**
 * Initialize the application!
 */ 
(function main() {
  const dashboard = new Dashboard();
})();
