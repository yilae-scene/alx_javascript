
//start of log
console.log("Start of the execution queue");
setTimeout(function () {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
    //final logs
    console.log("Final code block executed");
    console.log("End of the loop printing");
}, 0);
