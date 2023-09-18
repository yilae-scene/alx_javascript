
let createClassRoom = function (numbersOfStudents) {
    let count = -1;

    function studentSeat(seat) {
        return function () {
            return seat;
        };
    };
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        count++;
        students.push(studentSeat(count + 1));
    };
    return students;
};

let classRoom = createClassRoom(10);



console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
