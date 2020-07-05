/**
 * @function: fetchQuery
 * @description: Executes given fetch request and returns a promise with response
 */ 
const fetchQuery = function(data) {
  let request = {
    method: data.method
  };

  let url = data.url;
  
  // Handle POST request
  if (data.method === 'POST') {
    // Throw error if body object is missing
    if (!data.body) {
      return Promise.reject('Parameter is missing.');
    }
    
    request['body'] = data.body || {};
  }
 
  // Handle PUT request
  if (data.method === 'PUT') {
    // Throw error if id is missing
    if (!data.body.id) {
      return Promise.reject('Parameter is missing.');
    }
    
    url = `${data.url}/${data.body.id}`;
    request['body'] = data.body || {};
  }
  
  // Handle DELETE request
  if (data.method === 'DELETE') {
    // Throw error if id is missing
    if (!data.body.id) {
      return Promise.reject('Parameter is missing.');
    }
    
    url = `${data.url}/${data.body.id}`;
  }

  return fetch(url, request);
}

module.exports = { fetchQuery };
