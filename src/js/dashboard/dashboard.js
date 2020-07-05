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
  /**
   * @method constructor
   * @description Save references to batch/single form elements
   * and add form callbacks (initForms)
   */ 
  constructor() {
    // Binding to maintain "this" reference
    this.initForms = this.initForms.bind(this);
    this.displyExplorerList = this.displayExplorerList.bind(this);

    // Grab form elements (top forms on page)
    this.batchForm = document.querySelector('form.Geronimo-form1');
    this.singleForm = document.querySelector('form.Geronimo-form2');

    this.initForms();
  }
 
  /**
   * @method initForms
   * @description Sets up listeners for batch/ single form submissions
   */ 
  initForms() {
    // Pre-populate batch form text area with example json
    this.batchForm.querySelector('textarea').innerHTML =  JSON.stringify(batchConfig);

    // Attach callback fn on form submission
    this.batchForm.addEventListener("submit", e => this.onFormSubmit(e, true));
    this.singleForm.addEventListener("submit", e => this.onFormSubmit(e, false));
  }

  /**
   * @method onFormSubmit
   * @param e: event object passed to callback
   * @param isBatch: boolen if form is for batch form submission
   * @description Callback that populates configs list to create explorer cards
   */ 
  onFormSubmit(e, isBatch) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const formData = formHelpers.serialize(isBatch ? this.batchForm: this.singleForm);
    const configs = isBatch ? JSON.parse(formData.config) : [ formData ];

    this.displayExplorerList(configs);
  }

  /**
   * @method displayExplorerList
   * @param configs: array of explorer objects to display in list
   * @description Simply initializes ExplorerList class which, in turn, creates ExplorerComponets/Cards
   */ 
  displayExplorerList(configs) {
    this.explorerList = new ExplorerList(configs);
  
    return this.explorerList;
  }
}

module.exports = Dashboard;

