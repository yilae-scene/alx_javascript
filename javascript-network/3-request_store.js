#!/usr/bin/node

const requ = require('request')
const fs = require('fs')
const url = process.argv[2];
const path = process.argv[3];
requ.get(url, {encoding : 'UTF -8'}).pipe(fs.createWriteStream(path))
