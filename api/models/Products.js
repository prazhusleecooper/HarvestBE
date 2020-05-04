/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      allowNull: false,
    },
    category: {
      type: 'string',
      allowNull: false
    },
    priceUnit: {
      type: 'string',
      allowNull: 'false',
    },
    pricePerUnit: {
      type: 'number',
    },
    availability: {
      type: 'boolean',
      defaultsTo: true
    },
    sellers: {
      type: 'json',
      columnType: 'array'
    }
  },

};

