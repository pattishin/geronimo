'use strict';

/**
 * ExplorerForm
 * ---------------------
 */ 
class ExplorerForm {
  constructor(name, body) {
    this.name = name;
    this.fields = body;
    this.getForm = this.getForm.bind(this);
  }

  getForm() {
    return this.render();
  }

  render() {
    const newForm = document.createElement('form');
    newForm.setAttribute('name', this.name);
    newForm.setAttribute('class', 'Geronimo-explorerForm');

    if (this.fields) {
      this.fields.forEach(item => {
        let inputWrapper = document.createElement('div');
        inputWrapper.setAttribute('class', 'Geronimo-form-item');

        let newLabel = document.createElement('label');
        let newInput = document.createElement('input');

        Object.keys(item).map(key => {
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

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Execute';

    newForm.appendChild(submitButton);

    return newForm;
  }
}

module.exports = ExplorerForm;
