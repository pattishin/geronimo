'use strict';

const ExplorerForm = require('./explorerForm.js');

/**
 * ExplorerComponent
 * ---------------------
 */ 
class ExplorerComponent {
  /**
   * @method constructor
   * @param title - title of API explorer item
   * @param url - base url to execute query
   * @param method - method (GET, POST, PUT, DELETE) for query
   * @param body - body to submit in query
   */ 
  constructor(method, title, url, body) {
    this.formName = `${title}_${url}_${method}`;
    this.formData = { method, title, url, body };
    
    this.getElement = this.getElement.bind(this);
    this.render = this.render.bind(this);
  }

  getElement() {
    return this.render();
  }

  render() {
    const { title, url, body, method } = this.formData;
    const explorerForm =  new ExplorerForm(this.formName, body);
    const newExplorer = document.createElement('div');
    newExplorer.setAttribute('class', 'Geronimo-explorerCard');
    
    newExplorer.innerHTML = (
      `<div class="Geronimo-explorerCardPanel">
        <div>
          <h4>${title}</h4>
          <p>${method}</p>
        </div>
        <div>
          <a target="blank" src="${url}">${url}</a>
          ${explorerForm.getElement().outerHTML}
        </div>
      </div>
      <div class="Geronimo-explorerCardPanel Geronimo-explorerCardResult">
        <p>Execute query!</p>
      </div>`
    );

    return newExplorer;
  }
}

module.exports = ExplorerComponent;
