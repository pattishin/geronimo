'use strict';

const helpers = require('./helpers.js');
const ExplorerForm = require('./explorerForm.js');

class ExplorerComponent {
  constructor(method, title, url, body) {
    this.data = { method, title, url, body };
    this.explorers = document.querySelector('.Geronimo-explorers');
    this.displayExplorer({ method, title, url, body });
  }

  displayExplorer(formData) {
    const explorerList = document.querySelector('.Geronimo-explorers'); 
    const newExplorer = document.createElement('div');

    const explorerForm = new ExplorerForm(formData.body);

    console.log(formData);

    newExplorer.innerHTML = (`
      <div class="Geronimo-explorerCard mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
          <h4>${formData.title}</h4>
          <p>${formData.method}</p>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            ${formData.url}
          </a>
          <div class="mdl-layout-spacer"></div>
          ${explorerForm.getForm()}
        </div>
      </div>
    `);
    explorerList.appendChild(newExplorer);

    const form = document.querySelector('form.Geronimo-explorer-form');

    form.addEventListener("submit", e => {
      e.stopPropagation();
      e.preventDefault();
      const customRequest = {
        method: formData.method,
        url: formData.url,
        body: helpers.serialize(form)
      };

      helpers.fetchQuery(customRequest).then(response => {
        console.log(response);
      });
    });
  }
}

module.exports = ExplorerComponent;
