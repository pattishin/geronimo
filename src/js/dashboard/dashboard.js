'use strict';

const formHelpers = require('../../helpers/forms.js');
const batchConfig = require('../../examples/batch.json');
const ExplorerList = require('../explorers/explorerList.js');

/**
 * Dashboard
 * ---------------------
 * Houses the configuration forms for batch or single loading
 * and the API explorer list (and related forms)
 */ 
class Dashboard {
  constructor() {
    this.render = this.render.bind(this);
    this.initializeForms = this.initializeForms.bind(this);

    this.batchForm = document.querySelector('form.Geronimo-form1');
    this.singleForm = document.querySelector('form.Geronimo-form2');

    // Set up listeners for batch/ single form submissions
    this.initializeForms();
    this.configs = [];
  }
  
  initializeForms() {
    // Pre-populate batch form text area with example json
    this.batchForm.querySelector('textarea').innerHTML =  JSON.stringify(batchConfig);

    this.batchForm.addEventListener("submit", e => this.onFormSubmit(e, true));
    this.singleForm.addEventListener("submit", e => this.onFormSubmit(e, false));
  }

  onFormSubmit(e, isBatch) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const formData = formHelpers.serialize(isBatch ? this.batchForm: this.singleForm);
    this.configs = isBatch ? JSON.parse(formData.config) : [ formData ]; 
    this.render();
  }

  render() {
    return new ExplorerList(this.configs);
  }
}

module.exports = Dashboard;

