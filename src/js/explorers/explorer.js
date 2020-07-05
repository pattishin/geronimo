'use strict';

const ExplorerForm = require('./explorerForm.js');

/**
 * ExplorerComponent
 * ---------------------
 * Card displaying the title, base url, and
 * body form (if POST / PUT metho).
 * Displays form response of form created out of "body".
 */ 
class ExplorerComponent {
  /**
   * @method constructor
   * @param title: title of API explorer item
   * @param url: base url to execute query
   * @param method: method (GET, POST, PUT, DELETE) for query
   * @param body: array list of form fields to respond when this query is executed
   */ 
  constructor(method, title, url, body) {
    // Binding to maintain "this" reference
    this.getElement = this.getElement.bind(this);
    this.createElement = this.createElement.bind(this);
    
    // This explorer component/ card's form name
    this.formName = `${title}_${url}_${method}`;
    this.formData = { method, title, url, body }
  }

  /**
   * @method getElement
   * @description Return created html element of explorer component/card
   */ 
  getElement() {
    return this.createElement();
  }

  /**
   * @method createElement
   * @description Creates new dom element to represent explorer component
   * and initializes explorer form element to render within element
   */ 
  createElement() {
    const { title, url, body, method } = this.formData;
    // Initialize explorer form to append to card / component
    const explorerForm =  new ExplorerForm(this.formName, body);
    
    // Create explorer element wrapper
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
