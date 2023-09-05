
function theFunction(nb) {
    return nb = ++nb;
}

exports.addMeMaybe = function (x) {
    nb = theFunction(x)
    return nb;
}


