#!/usr/bin/node

const request = require('request')

url = process.argv[2]
request.get(url, response => {

    console.log('code:', response.statusCode);
})
