'use strict';

const helpers = require('./helpers.js');
const ExplorerForm = require('./explorerForm.js');

/**
 * ExplorerComponent
 * ---------------------
 */ 
class ExplorerComponent {
  constructor(method, title, url, body) {
    this.formName = `${title}_${url}_${method}`;
    this.formData = { method, title, url, body };
    
    this.render = this.render.bind(this);
  }

  getExplorer() {
    return this.render();
  }

  render() {
    const { title, url, body, method } = this.formData;
    const explorerForm =  new ExplorerForm(this.formName, body);
    const newExplorer = document.createElement('div');
    newExplorer.setAttribute('class', 'Geronimo-explorerCard');
    
    newExplorer.innerHTML = (
      `<div>
          <h4>${title}</h4>
          <p>${method}</p>
        </div>
        <div>
          <a target="blank" src="${url}">${url}</a>
          ${explorerForm.getForm().outerHTML}
        </div>`
    );

    return newExplorer;
  }
}

module.exports = ExplorerComponent;
