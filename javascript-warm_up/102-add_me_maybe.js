
function theFunction(nb) {
    return nb = nb +1 
}

exports.addMeMaybe = function(x) {
    nb = theFunction(x)
    console.log("New value: " + nb)
};


