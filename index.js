let demo = document.getElementById("demo");


demo.color="black";
console.log(demo.color);


let first = document.getElementById("first");
first.color="black";
first.fontSize="15";
console.log(first.color);
console.log(first.fontSize);

let second = document.getElementById("second");
first.color="black";
first.fontSize="15";
console.log(second.color);
console.log(second.fontSize);

let username = document.getElementById("username").value;
console.log(username);

function getUserName()
{
    let username = document.getElementById("username").value;
    document.getElementsByName("p")[0].innerHTML = username;
}