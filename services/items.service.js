'use strict';

const DbMixin = require('../mixins/db.mixin');

module.exports = {
  name: 'items',
  settings: {
    fields: ['_id', 'name', 'price'],
    entityValidator: {
      name: 'string|min:3',
      price: 'number|positive',
    },
  },
};
