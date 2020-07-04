'use strict';

const helpers = require('./helpers.js');
const ExplorerForm = require('./explorerForm.js');

/**
 * ExplorerComponent
 * ---------------------
 */ 
class ExplorerComponent {
  constructor(method, title, url, body) {
    this.render = this.render.bind(this);

    this.formData = { method, title, url, body };
  }

  getExplorer() {
    return this.render();
  }

  render() {
    const data = this.formData && this.formData.body;
    const explorerForm =  new ExplorerForm(data);
    
    const newExplorer = document.createElement('div');
    newExplorer.setAttribute('class', 'Geronimo-explorerCard');
    
    newExplorer.innerHTML = (
      `<div>
          <h4>${this.formData.title}</h4>
          <p>${this.formData.method}</p>
        </div>
        <div>
          <a target="blank" src="${this.formData.url}">
            ${this.formData.url}
          </a>
          ${explorerForm.getForm()}
        </div>`
    );

    return newExplorer;
  }
}

module.exports = ExplorerComponent;
