'use strict';

const helpers = require('./helpers.js');
const ExplorerComponent = require('./explorer.js');

/**
 * ExplorerList
 * ---------------------
 */ 
class ExplorerList {
  constructor(configs) {
    this.render = this.render.bind(this);
    
    this.configs = configs;
    this.explorerList = document.querySelector('.Geronimo-explorers'); 

    this.render();
  }

  onFormSubmit() {
    const explorerForms = document.querySelector('form.Geronimo-explorerForm');

    console.log(explorerForms);

    explorerForms.forEach(form => {
      form.addEventListener("submit", e => {
        e.stopPropagation();
        e.preventDefault();

        debugger;

        const customRequest = {
          method: formData.method,
          url: formData.url,
          body: helpers.serialize(form)
        };

        helpers.fetchQuery(customRequest).then(response => {
          console.log(response);
        });
      });
    });
  
  }

  render() {
    this.configs.map(config => {
      const newExplorer = new ExplorerComponent(
        config.method,
        config.title,
        config.url,
        config.body
      );

      this.explorerList.appendChild(newExplorer.getExplorer());
    });
  }
}

module.exports = ExplorerList;
