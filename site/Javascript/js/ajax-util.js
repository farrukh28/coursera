// For Get Data

let btn_fetch = document.getElementById("btn_fetch");
btn_fetch.addEventListener("click", getHandler);

function getHandler() {


    //instance of xhr object
    var xhr = new XMLHttpRequest();

    //open the object 'GET'
    xhr.open("GET", "data/name.json", true); // true for asynchronous


    xhr.onload = function () { // same as xhr.onreadystatechange (readyState = 4)

        if (this.readyState && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            var msg = "";
            var counter = 0;
            for (var i = 0; i < obj.data.length; i++) {
                msg += "<h2>" + ++counter + "</h2>";
                for (var j = 0 in obj.data[i]) {
                    msg += j + ": " + obj.data[i][j] + "<br>";
                }
            }
            document.getElementById("fetch").innerHTML = msg;
        } else {
            console.error("Some error occured.");
        }

    }

    //send request
    xhr.send();

    console.log("We are done.");

}



// For Populate button

var btn_backup = document.getElementById("btn_backup");
btn_backup.addEventListener("click", handlerPopulate);

function handlerPopulate() {

    // instantiate xhr object
    var xhr = new XMLHttpRequest();

    // open xhr object
    xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

    // when the response is ready
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            var list = document.getElementById("list");
            var str = "";
            for (var i = 0; i < obj.data.length; i++) {
                str += "<li>" + obj.data[i].employee_name + "<span> Salary</span> : " + obj.data[i].employee_salary + "</li>"
            }
            list.innerHTML = str;

        } else {
            console.log("Some Error Occured");
        }
    }

    // send the request
    xhr.send();

}


// For Post Data

var btn_post = document.getElementById("btn_post");
btn_post.addEventListener("click", postHandler);

function postHandler() {

    // intantiate xhr object
    var xhr = new XMLHttpRequest();

    // open xhr method
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhr.setRequestHeader("Content-type", "application/json");

    // when response is ready
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            var str = "";
            for (var x in obj.data) {
                str += x + ": " + obj.data[x] + "<br>";
            }

            document.getElementById("post_data").innerHTML = str;
        }
    }


    //send request
    xhr.send();

}