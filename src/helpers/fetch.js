/**
 * @function: fetchQuery
 * @description: Executes given fetch request and returns a promise with response
 */ 
const fetchQuery = function(data) {
  let request = {
    method: data.method
  };

  let url = data.url;
  
  if (data.method === 'POST') {
    request['body'] = data.body || {};
  }

  //TODO: Throw error if no given no json or id
  if (data.method === 'PUT') {
    url = `${data.url}/${data.body.id}`;
    request['body'] = data.body || {};
  }
  
  //TODO: Throw error if no given no id
  if (data.method === 'DELETE') {
    url = `${data.url}/${data.body.id}`;
  }

  return fetch(url, request).then(res => res.json())
}

module.exports = { fetchQuery };
