'use strict';

var Dashboard = require('./dashboard.js');

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
