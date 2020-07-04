'use strict';

const helpers = require('./helpers.js');
const ExplorerComponent = require('./explorer.js');

class Dashboard {
  constructor(title, url, method, body) {
    this.createExplorer = this.createExplorer.bind(this);
  
    this.form = document.querySelector('.Geronimo-form');
    this.form.addEventListener("submit", this.createExplorer);
  }

  createExplorer(e) {
    e.preventDefault();
    e.stopPropagation();

    const formData = helpers.serialize(this.form);
      const newExplorer = new ExplorerComponent(
        formData.method,
        formData.title,
        formData.url,
        formData.body
      );
  }

  displayResponse(response) {
    const responseWrapper = document.querySelector('.Geronimo-form-response'); 
    responseWrapper.innerHTML = JSON.stringify(response);
  }
}

module.exports = Dashboard;

