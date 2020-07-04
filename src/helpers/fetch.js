/**
 * @function: fetchQuery
 * @description: Executes given fetch request and returns a promise with response
 */ 
const fetchQuery = function(data) {
  const { method, url, body } = data;
  let request = { method };

  if (method === 'post' || method === 'put') {
    request['body'] = body || {};
  }

  return fetch(url, request).then(res => res.json())
}

module.exports = { fetchQuery };
