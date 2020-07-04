'use strict';

const helpers = require('./helpers.js');
const ExplorerComponent = require('./explorer.js');

class Dashboard {
  constructor(title, url, method, body) {
    this.createExplorers = this.createExplorers.bind(this);
  
    this.form1 = document.querySelector('.Geronimo-form1');
    this.form2 = document.querySelector('.Geronimo-form2');
    
    this.form1.addEventListener("submit", e => {
      e.preventDefault();
      e.stopPropagation();
      const formData = helpers.serialize(this.form1);
      
      this.createExplorers(JSON.parse(formData.config)); 
    });

    this.form2.addEventListener("submit", e => {
      e.preventDefault();
      e.stopPropagation();
      const formData = helpers.serialize(this.form2);
      
      this.createExplorers([formData]); 
    });
  }

  createExplorers(configs) {
    if(configs) {
      configs.map(config => {
        new ExplorerComponent(
          config.method,
          config.title,
          config.url,
          config.body
        );
      });
    }
  }
}

module.exports = Dashboard;

