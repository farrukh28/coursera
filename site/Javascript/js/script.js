// var msg = "Global";
// console.log("global Value : " + msg);

// function a() {
//     var msg = "inside a";
//     console.log("a Value : " + msg);
//     b();
// }

// function b() {
//     console.log("b Value : " + msg);
// }

// a();

// var x = "4"
// var y = 4;

// if (x == y) {
//     console.log("x = 4 and y = 4"); // type conversion is happening.
// }

// if (x === y) { // checks type as well as value strictly.
//     console.log("x = 4 and y = 4");
// } else {
//     console.log("x is not equal to y");
// }

// var z = y + x;

// console.log("Adding x and y : " + z);

// function conv(str) {
//     str = str || "whatever"; // same as if(str == undefined)
//     console.log("String values is : " + str);
// }
// conv("Hello");
// conv();

// ----------------------------------------------------------

// Objects within Object

// var company = {
//     compName: "Facebook",
//     color: "Blue",
//     ceo: {
//         fname: "Farrukh",
//         lname: "Ahmad",
//         age: {
//             "age of person": 34,
//             "person height": "5ft"
//         }
//     }
// };

// console.log(company);

// FUCNTIONS

// function multiply(x, y) {
//     return x * y;
// }
// multiply.version = "v.4.1.1"; // setting property of function like an object.
// // console.log(multiply(4, 5));

// var func = multiply; // setting refrence of multiply function to func
// console.log(func.version);

// FUNCTION FACTORY

// function doOperation(x, operation) {
//     return operation(x, 500);
// }

// var check = doOperation;
// console.log(check(20, func));

// // ------------------------------------

// function makeMultiplier(multiplier) {
//     var myFunFunc = function (x) {
//         return multiplier * x;
//     };

//     return myFunFunc;
// }

// var operation = makeMultiplier(3);
// console.log(operation(20));


function changeText() {
    var x = document.getElementById("para");
    // console.log(x.innerText);
    if (x.innerText = "Farrukh Ahmad") {
        x.innerText = x.innerText + " Nasir";
    }
    // console.log(x.innerText);
    x.style.textAlign = "center";
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function getDate() {
    var x = document.getElementById("date");
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Sepetemter",
        "October",
        "November",
        "Decemeber"
    ]
    var d = new Date();
    x.innerText = d.getDate() + " " + months[d.getMonth()] + ", " + d.getFullYear();
}

// ----------------------------------------------------

// FUNCTION CONSTRUCTOR
// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.getArea = function () { // This property will only be created once.
//     return Math.PI * Math.pow(this.radius, 2);
// }

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var otherCricle = new Circle(20);
// console.log(otherCricle.getArea());

// -------------------------- Object Literals -------------------------- //

// var literalCircle = {
//     radius: 10,
//     getArea: function () { // '{}' means new object
//         console.log(this); // this pointing to object literalCircle
//         var self = this; // self will point to object literalCircle
//         var incRadius = function () {
//             self.radius = 20;
//             console.log(self);
//         }
//         incRadius();
//     }
// }
// literalCircle.getArea();

// // ************************************

// function chk(x) {

//     var y = function () {
//         return x * x;
//     }
//     return y;
// }

// var num = chk(10);

// console.log(num());

// ****************************************** ARRAYS *************************************

// var arr = [
//     "Farrukh", // value
//     {
//         Mname: "Ahmad", // object
//         Lname: "Nasir"
//     },

//     function () { // Function
//         console.log("Hello " + arr[1].Lname);
//     }
// ];

// console.log(arr);

// ************************** FOR LOOPS for Object ***********************

// var obj = {
//     name: "Farrukh",
//     age: 23,
// }

// for (var x in obj) { // traverse properties of objects 
//     console.log(x + ": " + obj[x]); // x is property name. obj[x] is value of property
// }

// var arr = [
//     "Farrukh",
//     "Ahmad",
//     {
//         Lname: "Nasir",
//     }
// ]

// for (var y of arr) { // traverse values of arrays/ strings/ iterables
//     console.log("Hello " + y);
// }

// var str = "java script";
// for (var z of str) {
//     console.log(z);
// }

// ************************** IIFE - Immediatly invoked function Expression ***********************

var name = "Yakov Sir";
(function (name) {
    console.log("Thanks " + name + "!");
})(name);