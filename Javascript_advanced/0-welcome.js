
let welcome = function (firstName, lastName) {
    let fullName = firstName + ' ' + lastName
    function displayFullName() {
        alert('Welcome ' + fullName + '!')
    }
    displayFullName();
}
const greet = welcome('Holberton', 'School');
greet();
