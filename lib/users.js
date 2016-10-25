var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var $fh = require('fh-mbaas-api');
var sync = require('./handlers.js');
var dataset_id = 'users';

sync.init(dataset_id, {}, function() {
  sync.handleList(dataset_id, dataHandler.doList);
  sync.handleCreate(dataset_id, dataHandler.doCreate);
  sync.handleRead(dataset_id, dataHandler.doRead);
  sync.handleUpdate(dataset_id, dataHandler.doUpdate);
  sync.handleDelete(dataset_id, dataHandler.doDelete);
});

