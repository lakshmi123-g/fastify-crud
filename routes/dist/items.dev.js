"use strict";

var _require = require('../controllers/items'),
    getItems = _require.getItems,
    getItem = _require.getItem,
    addItem = _require.addItem,
    deleteItem = _require.deleteItem,
    updateItem = _require.updateItem; // Item schema


var Item = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  }
}; // Options for get all items

var getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item
      }
    }
  },
  handler: getItems
};
var getItemOpts = {
  schema: {
    response: {
      200: Item
    }
  },
  handler: getItem
};
var postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: {
          type: 'string'
        }
      }
    },
    response: {
      201: Item
    }
  },
  handler: addItem
};
var deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          }
        }
      }
    }
  },
  handler: deleteItem
};
var updateItemOpts = {
  schema: {
    response: {
      200: Item
    }
  },
  handler: updateItem
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get('/items', getItemsOpts); // Get single items

  fastify.get('/items/:id', getItemOpts);
  fastify.post('/items', postItemOpts);
  fastify["delete"]('/items/:id', deleteItemOpts);
  fastify.put('/items/:id', updateItemOpts);
  done();
}

module.exports = itemRoutes;