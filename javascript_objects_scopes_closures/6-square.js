//#!/usr/bin/node

const square = require("./5-square");

class Square extends square {
    constructor(size) {
        super(size);
    }
    charPrint(c) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (typeof c === "undefined") {
                    process.stdout.write("X");
                } else {
                    process.stdout.write(c);
                }
            }
            console.log();
        }
    }
}

module.exports = Square;
