
const serialize = function(form) {
  let serialized = {};

  for(let i = 0; i < form.elements.length; i++){
    const field = form.elements[i];
    if (field.name) {
      serialized[field.name] = (
        field.name === 'body'
          ? JSON.parse(field.value)
          : field.value
        );
    }
  }

  return serialized;
}

const fetchQuery = function(data) {
  const { method, url, body } = data;
  let request = { method };

  console.log(data);

  switch(method) {
    case 'put':
    case 'post':
      request['body'] = body || {};
      break;
    case 'delete':
      break;
  }

  return fetch(url, request).then(res => res.json())
}

module.exports = {
  serialize,
  fetchQuery
};
