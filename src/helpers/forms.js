/**
 * @function: serialize
 * @description: Retrieves all values from given html form
 */ 
const serialize = function(form) {
  let serialized = {};

  for(let i = 0; i < form.elements.length; i++){
    const field = form.elements[i];
    if (field.name && field.value) {
      field.name !== 'body'
        ? serialized[field.name] = field.value
        : serialized[field.name] = JSON.parse(field.value);
    }
  }

  return serialized;
}

module.exports = { serialize };

