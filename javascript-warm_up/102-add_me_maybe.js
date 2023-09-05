
function theFunction(nb) {
    return nb = ++nb;
}

exports.addMeMaybe = function (x) {
    nb = theFunction(x)
    console.log("New value: " + nb);
    return nb;
}


