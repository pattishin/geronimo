'use strict';

const helpers = require('./helpers.js');
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
    const customRequest = {
      method,
      url,
      body: body && helpers.serialize(form)
    };

    helpers.fetchQuery(customRequest).then(response => {
      form.parentElement.parentElement.nextElementSibling.innerHTML = `<p>${JSON.stringify(response)}</p>`;
    });
  }

  /**
   * @method main
   */ 
  main() {
    this.configs && this.configs.forEach((config, index) => {
      const { title, method, url, body } = config;
      const formName = `${title}_${url}_${method}`;
      const newExplorer = new ExplorerComponent(method, title, url, body);

      this.explorerListMap[formName] = config;
      this.explorerEmptyList.setAttribute('style', 'display: none');
      this.explorerList.appendChild(newExplorer.getElement());
    });

    const explorerForms = document.querySelectorAll('form.Geronimo-explorerForm');

    // Listens for form submissions from Explorer items
    explorerForms.forEach(form => form.addEventListener("submit", e => this.onFormSubmit(e, form)));
  }
}

module.exports = ExplorerList;
