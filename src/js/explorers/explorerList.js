'use strict';

const fetchHelpers = require('../../helpers/fetch.js');
const formHelpers = require('../../helpers/forms.js');
const ExplorerComponent = require('./explorer.js');

/**
 * ExplorerList
 * ---------------------
 * Controller class for all created Explorer classes
 */
class ExplorerList {
  /**
   * @method constructor
   * @param configs - json objects of explorer items to create
   */ 
  constructor(configs) {
    this.configs = configs;
    this.explorerListMap = {};

    // Maintain "this" reference
    this.main = this.main.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    
    // Root element
    this.explorerList = document.querySelector('.Geronimo-explorerList'); 
    this.explorerEmptyList = document.querySelector('.Geronimo-explorerEmptyList'); 
    
    this.main();
  }

  /**
   * @method onFormSubmit
   */ 
  onFormSubmit(e, form) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    const { method, url, body } = this.explorerListMap[form.name];
    const serializedForm = body && formHelpers.serialize(form);
    const customRequest = { method, url, body: serializedForm };

    const explorerCardResult = (
      form
        .parentElement
        .parentElement
        .nextElementSibling
    );

    // Execute query and pass relevant body values
    // & display response from fetch call
    fetchHelpers.fetchQuery(customRequest)
      .then(response => explorerCardResult.innerHTML = `<p>${JSON.stringify(response)}</p>`)
      .catch(err => explorerCarResult.innerHTML = `<p>${JSON.stringify(err)}</p>`);
  }

  /**
   * @method main
   */ 
  main() {
    // If we have the explorer json objects from 
    // batch form/ single form (check out Dashboard)
    if (this.configs) {
      this.configs.forEach((config, index) => {
        const formName = `${config.title}_${config.url}_${config.method}`;
        const newExplorer = new ExplorerComponent(config.method, config.title, config.url, config.body);
        
        // Initialize explorer list map array, to later use
        // to match selected forms with their relevant config objects
        this.explorerListMap[formName] = config;

        // Hide "empty list" label
        this.explorerEmptyList.setAttribute('style', 'display: none');
        // Add explorer component/card to list
        this.explorerList.appendChild(newExplorer.getElement());
      });
    }

    // Grab all explorer forms (forms in explorer component/ card)
    const explorerForms = document.querySelectorAll('form.Geronimo-explorerForm');

    // Add callback for form submissions
    explorerForms.forEach(form => form.addEventListener("submit", e => this.onFormSubmit(e, form)));
  }
}

module.exports = ExplorerList;
