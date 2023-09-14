#!/usr/bin/node

const request = require("request");

const Id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${Id}`;


request.get(url, function (error, response, body) {
  if (error) {
    console.log(error);
    return;
  }

  const objBody = JSON.parse(body);
  const characters = objBody.characters;
  for (const char of characters) {
    request(char, function (error,response, body){
      if (error) {
        console.log(error);
        return;
      }
      const nameCharacter = JSON.parse(body);
      console.log(nameCharacter.name);
    });
  }
});
