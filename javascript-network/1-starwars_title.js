//#!/usr/bin/node

//const { title } = require("process");
const request = require("request");

const Id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/ ${Id}`;
request.get(url, function (error, response, body) {
    if (error){
    console.log('error: ', error)
    }
    else{
    const objBody = JSON.parse(body)
        console.log(objBody['title'])
    }
    // objBody['results'].forEach(film => {
    //     console.log(film.title)
    // })
    //console.log("code:", response.statusCode);
});
