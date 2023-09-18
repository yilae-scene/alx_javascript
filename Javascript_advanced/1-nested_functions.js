//question1 remember space between names and semi-colon

globalVariable = "Welcome";
function outer() {

    alert(globalVariable);
    let course = "Holberton";

    function inner() {
        alert(globalVariable + ' ' + course);
        exclamation = "!";

        function inception() {
            alert(globalVariable + ' ' + course + exclamation);
        };
        inception();
    };

    inner();
}
welcome = outer();
welcome();
