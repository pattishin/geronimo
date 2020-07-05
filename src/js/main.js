'use strict';

/**
 * Importing app styles
 */ 
require('../styles/index.css');
require('../styles/dashboard.css');
require('../styles/explorer.css');
require('../styles/forms.css');

const Dashboard = require('./dashboard/dashboard.js');

// Polyfilling promises and fetch
var Promise = require('promise-polyfill');
require("whatwg-fetch");

if (!window.Promise) {
  window.Promise = Promise;
}

/**
 * Initialize the dashboard!
 */ 
(function main() {
  const dashboard = new Dashboard();
})();
