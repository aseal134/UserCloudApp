var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var $fh = require('fh-mbaas-api');

function weatherRoute() {
  var weather = new express.Router();
  weather.use(cors());
  weather.use(bodyParser());

  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  weather.post('/', function(req, res) {
    console.log(new Date(), 'In weather route POST / req.query=', req.query);

    var city = req.body.city;
    var country = req.body.country;

    console.log(new Date(), 'city=' + city);
    console.log(new Date(), 'country=' + country);

    var options = {
      "guid" : "2ovntnmqzag3zxi3ui7cjuvk", // The 24 character unique id of the service
      "path": "/weather-service", //the path part of the url excluding the hostname - this will be added automatically
      "method": "POST",
      "params": {
        "city": city,
        "country": country
      }, //data to send to the server - same format for GET or POST
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
        res.json({msg: JSON.stringify(body)});
      } else {
        console.log('Got response from service - status body : ', res.statusCode, body);

        // see http://expressjs.com/4x/api.html#res.json
        res.json(body);
      }
    };

    $fh.service(options, callback);
    
  });

  return weather;
}

module.exports = weatherRoute;