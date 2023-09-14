#!/usr/bin/node

const request = require("request");

const Id = process.argv[2];
url = `https://swapi-api.alx-tools.com/api/films/:${Id}`;
request.get(url, function (error, response) {
  //console.log('error: ', error)
  console.log("code:", response.statusCode);
});
