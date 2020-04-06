'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const properties = sourceString.trim().split(';');

  for (let i = 0; i < properties.length; i++) {
    if (properties[i] !== '') {
      const arrItem = properties[i].split(':');

      if (arrItem.length > 1) {
        obj[arrItem[0].trim()] = arrItem[1].trim();
      }
    }
  }

  return obj;
}

module.exports = convertToObject;
