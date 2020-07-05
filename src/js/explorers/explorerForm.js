'use strict';

/**
 * ExplorerForm
 * ---------------------
 * Form created from given fields ("body") 
 * to produce object to submit to relevant query
 */ 
class ExplorerForm {
  /**
   * @method constructor
   * @param name: this explorer form name
   * @param body: fields of this form to submit this query
   */ 
  constructor(name, body) {
    this.name = name;
    this.fields = body;

    // Binding to maintain "this" referenc
    this.getElement = this.getElement.bind(this);
    this.createElement = this.createElement.bind(this);
  }

  /**
   * @method getElement
   * @description Return created html element of explorer form
   */ 
  getElement() {
    return this.createElement();
  }

  /**
   * @method createElement
   * @description Creates new dom element to represent explorer form element
   */ 
  createElement() {
    const newForm = document.createElement('form');
    newForm.setAttribute('name', this.name);
    newForm.setAttribute('class', 'Geronimo-explorerForm');

    // If we have fields for the form, dynamically create the input elements
    if (this.fields) {
      this.fields.forEach(item => {
        let inputWrapper = document.createElement('div');
        let newLabel = document.createElement('label');
        let newInput = document.createElement('input');

        inputWrapper.setAttribute('class', 'Geronimo-form-item');

        // Dynamically add in attributes for each input
        Object.keys(item).map(key => {
          // Only add in fields if "name" property is available
          if (key === 'name') {
            newLabel.setAttribute('for', item[key]);
            newLabel.innerHTML = item[key];
          }
          newInput.setAttribute(key, item[key]);
        });

        inputWrapper.appendChild(newLabel);
        inputWrapper.appendChild(newInput);

        newForm.appendChild(inputWrapper);
      });
    }

    // Create & attach submit button
    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Execute';

    newForm.appendChild(submitButton);

    return newForm;
  }
}

module.exports = ExplorerForm;
