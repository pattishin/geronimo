'use strict';

const helpers = require('./helpers.js');

class ExplorerComponent {
  constructor(formData) {
    this.explorers = document.querySelector('.Geronimo-explorers');
    console.log(formData);
    this.displayExplorer(formData);
  }

  displayExplorer(formData) {
    const explorers= document.querySelector('.Geronimo-explorers'); 
    const newExplorer = document.createElement('form');
    newExplorer.setAttribute('name', `explorer-${explorers.length}`);
    newExplorer.innerHTML = `<p>${formData.title}</p><p>${formData.url}</p><p>${formData.method}</p><p>${formData.body}</p>`;
    explorers.appendChild(newExplorer);
  }


  fetchQuery(data) {
    const { type, url, body } = data;
    let request = { method: type };

    switch(type) {
      case 'put':
      case 'post':
        request['body'] = body || {};
        break;
      case 'delete':
        break;
    }

    return fetch(url, request).then(res => res.json())
  }
}

module.exports = ExplorerComponent;
