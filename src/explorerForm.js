'use strict';

/**
 * ExplorerForm
 * ---------------------
 */ 
class ExplorerForm {
  constructor(body) {
    this.getForm = this.getForm.bind(this);
    this.form = this.render(body);
  }

  getForm() {
    return this.form.outerHTML;
  }

  render(body) {
    const newForm = document.createElement('form');
    newForm.setAttribute('class', 'Geronimo-explorerForm');

    if (body) {
      body.forEach(item => {
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

    let submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.innerHTML = 'Execute';

    newForm.appendChild(submit);

    return newForm;
  }
}

module.exports = ExplorerForm;
