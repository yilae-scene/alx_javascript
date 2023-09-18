//question 6 and some comments
let studentHogwarts = function () {
    let privateScore = 0;
    let name = null

    function changeScoreby(points) {
        privateScore += points;

    };
    return {
        setName(newName) {
            name = newName;
        },

        rewardStudent() {
            changeScoreby(+ 1);
        },

        penalizeStudent() {
            changeScoreby(-1);
        },

        getScore() {
            return `${name}:${privateScore}`;
        }
    };
};

//harry instance
const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore())

//draco instance
const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore())
