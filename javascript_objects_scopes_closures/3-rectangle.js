#!/usr/bin/node

class Rectangle {
    //   width;
    //   height;
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }
    print() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                process.stdout.write("x");
            }
            console.log();
        }
    }
}

module.exports = Rectangle;
