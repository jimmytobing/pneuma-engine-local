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
  actions: {
    hello: {
      rest: {
        method: 'GET',
        path: '/',
      },
      params: {
        name: 'string',
      },
      async handler(ctx) {
        return 'Hello ' + ctx.params.namaku;
      },
    },
  },
};
