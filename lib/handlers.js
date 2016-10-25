var $fh = require('fh-mbaas-api');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var handlers = new express.Router();

exports.doList = function(dataset_id, params, cb, meta_data) {
console.log('In doList');

    // POST GET endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
    var options = {
      "guid" : "2ovntnmqzag3zxi3ui7cjuvk", // The 24 character unique id of the service
      "path": "/users", //the path part of the url excluding the hostname - this will be added automatically
      "method": "GET",
      "timeout": 25000, // timeout value in milliseconds
      "headers" : {
        // Custom headers to add to the request.
      }
    };

    var callback = function(err, body, theServiceRes) {
      console.log('statuscode: ', theServiceRes && theServiceRes.statusCode);
      if ( err ) {
        // An error occurred during the call to the service. log some debugging information
        console.log('service call failed - err : ', err);

        cb({msg: JSON.stringify(body)});

      } else {
        console.log('Got response from service - status body : ', theServiceRes.statusCode, body);

        
        cb(null, body);


      }
    };

    $fh.service(options, callback);

};

exports.doCreate = function(dataset_id, data, cb, meta_data) {
  console.log('In doCreate');

    // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
    console.log(new Date(), 'In hanlders route POST / req.query=', req.query);

    var firstName = data.firstName;
    var lastName = data.lastName;

    console.log(new Date(), 'firstName=' + firstName);
    console.log(new Date(), 'lastName=' + lastName);

    var options = {
      "guid" : "2ovntnmqzag3zxi3ui7cjuvk", // The 24 character unique id of the service
      "path": "/users", //the path part of the url excluding the hostname - this will be added automatically
      "method": "POST",
      "params": data, //data to send to the server - same format for GET or POST
      "timeout": 25000, // timeout value in milliseconds
      "headers" : {
        // Custom headers to add to the request.
      }
    };

    var callback = function(err, body, theServiceRes) {
      console.log('statuscode: ', theServiceRes && theServiceRes.statusCode);
      if ( err ) {
        // An error occurred during the call to the service. log some debugging information
        console.log('service call failed - err : ', err);

        cb({msg: JSON.stringify(body)});
      } else {
        console.log('Got response from service - status body : ', theServiceRes.statusCode, body);
        cb(null,body);
      }
    };

    $fh.service(options, callback);

};

exports.doRead = function(dataset_id, guid, cb, meta_data) {
  console.log('In doRead');


    // POST GET endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
    console.log(new Date(), 'In hanlders route GET READ / req.query=', req.query);

    var options = {
      "guid" : "2ovntnmqzag3zxi3ui7cjuvk", // The 24 character unique id of the service
      "path": "/users/" + guid, //the path part of the url excluding the hostname - this will be added automatically
      "method": "GET",
      "timeout": 25000, // timeout value in milliseconds
      "headers" : {
        // Custom headers to add to the request.
      }
    };

    var callback = function(err, body, theServiceRes) {
      console.log('statuscode: ', theServiceRes && theServiceRes.statusCode);
      if ( err ) {
        // An error occurred during the call to the service. log some debugging information
        console.log('service call failed - err : ', err);

        // see http://expressjs.com/4x/api.html#res.json
        cb({msg: JSON.stringify(body)});
      } else {
        console.log('Got response from service - status body : ', theServiceRes.statusCode, body);

        // see http://expressjs.com/4x/api.html#res.json
        cb(null, body);
      }
    };

    $fh.service(options, callback);

};

exports.doUpdate = function(dataset_id, guid, data, cb, meta_data) {
  console.log('In doUpdate');

    // POST put endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
    var options = {
      "guid" : "2ovntnmqzag3zxi3ui7cjuvk", // The 24 character unique id of the service
      "path": "/users/" + guid, //the path part of the url excluding the hostname - this will be added automatically
      "method": "PUT",
      "params": data, //data to send to the server - same format for GET or POST
      "timeout": 25000, // timeout value in milliseconds
      "headers" : {
        // Custom headers to add to the request.
      }
    };

    var callback = function(err, body, theServiceRes) {
      console.log('statuscode: ', theServiceRes && theServiceRes.statusCode);
      if ( err ) {
        // An error occurred during the call to the service. log some debugging information
        console.log('service call failed - err : ', err);

        // see http://expressjs.com/4x/api.html#res.json
        cb({msg: JSON.stringify(body)});
      } else {
        console.log('Got response from service - status body : ', theServiceRes.statusCode, body);
        cb(null, body);

      }
    };

    $fh.service(options, callback);

};

exports.doDelete = function(dataset_id, guid, cb, meta_data) {
  console.log('In doDelete');
      // POST DELETE endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
    var options = {
      "guid" : "2ovntnmqzag3zxi3ui7cjuvk", // The 24 character unique id of the service
      "path": "/users/" + guid, //the path part of the url excluding the hostname - this will be added automatically
      "method": "DELETE",
      "timeout": 25000, // timeout value in milliseconds
      "headers" : {
        // Custom headers to add to the request.
      }
    };

    var callback = function(err, body, theServiceRes) {
      console.log('statuscode: ', theServiceRes && theServiceRes.statusCode);
      if ( err ) {
        // An error occurred during the call to the service. log some debugging information
        console.log('service call failed - err : ', err);

        // see http://expressjs.com/4x/api.html#res.json
        cb({msg: JSON.stringify(body)});
      } else {
        console.log('Got response from service - status body : ', res.statusCode, body);
        cb(null, body);

      }
    };

    $fh.service(options, callback);

};

