'use strict';

const helpers = require('./helpers.js');
const ExplorerList = require('./explorerList.js');

/**
 * Dashboard
 * ---------------------
 */ 
class Dashboard {
  constructor(title, url, method, body) {
    this.render = this.render.bind(this);
    this.initializeForms = this.initializeForms.bind(this);

    this.initializeForms();
  }

  initializeForms() {
    const batchForm = document.querySelector('.Geronimo-form1');
    const singleForm = document.querySelector('.Geronimo-form2');
    
    batchForm.addEventListener("submit", e => {
      e.preventDefault();
      e.stopPropagation();
      const formData = helpers.serialize(batchForm);
      
      this.render(JSON.parse(formData.config)); 
    });

    singleForm.addEventListener("submit", e => {
      e.preventDefault();
      e.stopPropagation();
      const formData = helpers.serialize(singleForm);

      console.log(formData);

      this.render([formData]); 
    });
  }

  render(configs) {
    const explorerList = new ExplorerList(configs);
  }
}

module.exports = Dashboard;

