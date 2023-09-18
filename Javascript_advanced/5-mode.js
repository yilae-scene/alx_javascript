// create a function that will manupilate the html
let changeMode = function (size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
};

//main function to call later for html manupilation 
const main = function () {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    // create div and paragraph and points to write in the paragraph
    const divison = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.innerText = "Welcome Holberton!";

    // appen the paragraph to div then div to body
    divison.appendChild(paragraph);
    document.body.appendChild(paragraph);

    //create 3 buttons
    const btn = document.createElement("button");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");

    //name those 3 buttons
    const btnText = document.createTextNode("spooky");
    const btnText1 = document.createTextNode("Dark mode");
    const btnText2 = document.createTextNode("Scream mode");

    //append those names to the buttons
    btn.appendChild(btnText);
    btn1.appendChild(btnText1);
    btn2.appendChild(btnText2);

    //append buttons to body
    document.body.appendChild(btn);
    document.body.appendChild(btn1);
    document.body.appendChild(btn2);

    //set attribute to each buttons;
    btn.setAttribute("id", "primary_btn");
    btn1.setAttribute("id", "secondary_btn");
    btn2.setAttribute("id", "third_btn");

    //select each elements with id and eventlistner;
    document.getElementById("primary_btn").addEventListener("click", spooky);
    document.getElementById("secondary_btn").addEventListener("click", darkMode);
    document.getElementById("third_btn").addEventListener("click", screamMode);
};

main();
