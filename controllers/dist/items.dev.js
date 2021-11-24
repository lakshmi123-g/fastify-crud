"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _require = require('uuid'),
    uuidv4 = _require.v4;

var items = require('../Items');

var getItems = function getItems(req, reply) {
  reply.send(items);
};

var getItem = function getItem(req, reply) {
  var id = req.params.id;
  var item = items.find(function (item) {
    return item.id === id;
  });
  reply.send(item);
};

var addItem = function addItem(req, reply) {
  var name = req.body.name;
  var item = {
    id: uuidv4(),
    name: name
  };
  items = [].concat(_toConsumableArray(items), [item]);
  reply.code(201).send(item);
};

var deleteItem = function deleteItem(req, reply) {
  var id = req.params.id;
  items = items.filter(function (item) {
    return item.id !== id;
  });
  reply.send({
    message: "Item ".concat(id, " has been removed")
  });
};

var updateItem = function updateItem(req, reply) {
  var id = req.params.id;
  var name = req.body.name;
  items = items.map(function (item) {
    return item.id === id ? {
      id: id,
      name: name
    } : item;
  });
  item = items.find(function (item) {
    return item.id === id;
  });
  reply.send(item);
};

module.exports = {
  getItems: getItems,
  getItem: getItem,
  addItem: addItem,
  deleteItem: deleteItem,
  updateItem: updateItem
};