'use strict';

const helpers = require('./helpers.js');
const ExplorerComponent = require('./explorer.js');

/**
 * ExplorerList
 * ---------------------
 */ 
class ExplorerList {
  constructor(configs) {
    this.configs = configs;
    this.explorerListMap = {};

    // Maintain "this" reference
    this.render = this.render.bind(this);
    this.initializeExplorerForms = this.initializeExplorerForms.bind(this);

    // Root
    this.explorerList = document.querySelector('.Geronimo-explorers'); 

    this.render();
  }

  initializeExplorerForms() {
    const explorerForms = document.querySelectorAll('form.Geronimo-explorerForm');

    console.log(this.explorerListMap);
    console.log(explorerForms);

    explorerForms.forEach(form => {
      form.addEventListener("submit", e => {
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
          console.log(response);
          const result = document.createElement('p');
          result.innerHTML = `${JSON.stringify(response)}`;
          form.parentElement.appendChild(result);
        });
      });
    });
  
  }

  render() {
    this.configs.forEach((config, index) => {
      const { title, method, url, body } = config;
      const formName = `${title}_${url}_${method}`;
      const newExplorer = new ExplorerComponent(method, title, url, body);

      this.explorerListMap[formName] = config;
      this.explorerList.appendChild(newExplorer.getExplorer());
    });

    this.initializeExplorerForms();
  }
}

module.exports = ExplorerList;
