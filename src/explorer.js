'use strict';

const helpers = require('./helpers.js');
const ExplorerForm = require('./explorerForm.js');

class ExplorerComponent {
  constructor(method, title, url, body) {
    this.displayLoader = this.displayLoader.bind(this);

    this.explorers = document.querySelector('.Geronimo-explorers');
    this.displayLoader({ method, title, url, body });
  }

  displayLoader(formData) {
    const loader = document.createElement('p');
    loader.innerHTML = 'Configuring ...';

    this.explorers.appendChild(loader);

    setTimeout(() => this.displayExplorer(formData), 1000);
  }

  displayExplorer(formData) {
    const explorerList = document.querySelector('.Geronimo-explorers'); 
    const newExplorer = document.createElement('div');
    newExplorer.setAttribute('class', 'Geronimo-explorerCard');
    let explorerForm;

    if (formData.body) {
      explorerForm = new ExplorerForm(formData.body);
    }

    newExplorer.innerHTML = explorerForm ? (
      `<div>
          <h4>${formData.title}</h4>
          <p>${formData.method}</p>
        </div>
        <div>
          <a target="blank" src="${formData.url}">
            ${formData.url}
          </a>
          ${explorerForm.getForm()}
        </div>`
    ) : (`
        <div>
          <h4>${formData.title}</h4>
          <p>${formData.method}</p>
        </div>
        <div>
          <a target="blank" src="${formData.url}">
            ${formData.url}
          </a>
        </div>`
    );

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
