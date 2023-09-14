#!/usr/bin/node

const request = require('request')

url = process.argv[2]
request.get(url, function (error, response) {
    //console.log('error: ', error)
    console.log('code:', response.statusCode);
})
