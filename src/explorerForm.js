'use strict';

class ExplorerForm {
  constructor(body) {
    this.form = this.createForm(body);
    this.getForm = this.getForm.bind(this);
  }

  getForm() {
    return this.form;
  }

  createForm(body) {
    const newForm = document.createElement('form');
    newForm.setAttribute('class', 'Geronimo-explorer-form');

    for(let i = 0; i< body.length; i++) {
      const item = body[i];
      let inputWrapper = document.createElement('div');
      inputWrapper.setAttribute('class', 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label');

      let newLabel = document.createElement('label');

      let newInput = document.createElement('input');
      newInput.setAttribute('class', 'mdl-textfield__input');

      Object.keys(item).map(key => {
        if (key === 'name') {
          newLabel.setAttribute('for', item[key]);
          newLabel.innerHTML = item[key];
        }
        newInput.setAttribute(key, item[key]);
      });
      
      inputWrapper.appendChild(newInput);
      inputWrapper.appendChild(newLabel);

      newForm.appendChild(inputWrapper);
    }

    let submit = document.createElement('button');
    submit.setAttribute('class', 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent')
    submit.setAttribute('type', 'submit');
    submit.innerHTML = 'Execute';

    newForm.appendChild(submit);

    return newForm.outerHTML;
  }
}

module.exports = ExplorerForm;
