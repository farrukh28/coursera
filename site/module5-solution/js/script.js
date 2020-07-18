// $(function () {
//     $("#btn-menu").blur(function (event) {
//         var screenWidth = window.innerWidth;
//         if (screenWidth < 768) {
//             $("#collapsable-nav").collapse("hide");
//         }
//     });

//     $("#btn-menu").click(function (event) {
//         $(event.target).focus();
//     });
// });

var btn = document.getElementById("btn-menu");
var menu = document.getElementById("collapsable-nav");

// when button loses focus
btn.addEventListener("blur", blurHandler);

function blurHandler() {
    menu.style.display = "none";
}

// when on focus
btn.addEventListener("click", focusHandler)

function focusHandler() {
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


// ---------------------- Dynamically insert content into HomePage ------------------------------
(function () {

    // To add Jumbotron and Menu-Tiles
    var content = "snippets/home-menu.html";
    var selector = "main-content";
    insertingContent(content, selector);

})();


// To Show Menu-Tiles when user clicks on Menu
function showMenu() {

    // To add Categories
    var selector = "main-content";
    var categoryTitle = "snippets/menu-categories-title.html";
    var categoryHTML = "snippets/categories-snippet.html";
    var allCategoryURL = "https://davids-restaurant.herokuapp.com/categories.json";
    insertCategory(selector, categoryTitle, categoryHTML, allCategoryURL);
}




function insertingContent(UrlHTML, selector) {

    var html = "";
    var insertHTML = function (selector, html) {
        var targetElem = document.getElementById(selector);
        targetElem.innerHTML = html;
    };

    var showLoading = function (selector) {
        html = "<div class='text-center mt-4'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHTML(selector, html);
    };

    showLoading(selector);

    var xhr = new XMLHttpsRequest;

    xhr.open("GET", UrlHTML, true);

    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            var str = this.responseText;
            insertHTML(selector, str);
        } else {
            console.log("Some Error has Occured!");
        }
    };

    xhr.send();
    console.log("Content Added");
}


// To insert Categories
function insertCategory(selector, categoryTitle, categoryHTML, allCategoryURL) {

    var html = "";

    var insertHTML = function (selector, html) {
        var targetElem = document.getElementById(selector);
        targetElem.innerHTML = html;
    };

    var showLoading = function (selector) {
        html = "<div class='text-center mt-4'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHTML(selector, html);
    };

    showLoading(selector);

    // Change String
    var insertProperty = function (string, propName, propValue) {

        var propToReplace = "{{" + propName + "}}";
        var res = new RegExp(propToReplace, "g");
        string = string.replace(res, propValue);
        return string;
    };

    var catTitle = "";
    var catHTML = "";
    var finalHTML = "";

    // Get Category Title
    var xhr = new XMLHttpsRequest;
    xhr.open("GET", categoryTitle, false);
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            catTitle = this.responseText;
        } else {
            console.log("Some Error Has Ocurred!");
        }
    }
    xhr.send();

    // Get Category HTML
    var xhr1 = new XMLHttpsRequest;
    xhr1.open("GET", categoryHTML, false);
    xhr1.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            catHTML = this.responseText;
        } else {
            console.log("Some Error Has Ocurred!");
        }
    }
    xhr1.send();

    // Get All Categories From URL
    var xhr2 = new XMLHttpsRequest;
    xhr2.open("GET", allCategoryURL, false);
    xhr2.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            finalHTML = catTitle + "<section class='row'>";
            var obj = JSON.parse(this.responseText);
            var short_name = "";
            var name = "";
            var special_ins = "";
            for (var i = 0; i < obj.length; i++) {
                short_name = obj[i].short_name;
                name = obj[i].name;
                special_ins = obj[i].special_instructions;
                finalHTML += catHTML;
                finalHTML = insertProperty(finalHTML, "name", name);
                finalHTML = insertProperty(finalHTML, "short_name", short_name);
                finalHTML = insertProperty(finalHTML, "special_instructions", special_ins);
            }
            finalHTML += "</section>"
        } else {
            console.log("Some Error Has Ocurred!");
        }
    }
    xhr2.send();
    insertHTML(selector, finalHTML);
}



// Load Menu Items
function loadMenuItems(short_name, name, special_instructions) {

    // console.log(short_name);
    // console.log(name);
    // console.log(special_instructions);
    var html = "";
    var selector = "main-content";

    var insertHTML = function (selector, html) {
        var targetElem = document.getElementById(selector);
        targetElem.innerHTML = html;
    };

    var showLoading = function (selector) {
        html = "<div class='text-center mt-4'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHTML(selector, html);
    };

    showLoading(selector);

    // Change String
    var insertProperty = function (string, propName, propValue) {

        var propToReplace = "{{" + propName + "}}";
        var res = new RegExp(propToReplace, "g");
        string = string.replace(res, propValue);
        return string;
    };

    var finalHTML = "";
    var menuTitle = "snippets/menu-items-title.html";
    var menuHTML = "snippets/menu-items.html"

    // Getting and Replacing Values in Menu Title
    var xhr = new XMLHttpsRequest;
    xhr.open("GET", menuTitle, false);
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            var strTitle = this.responseText;
            strTitle = insertProperty(strTitle, "name", name);
            strTitle = insertProperty(strTitle, "special_instructions", special_instructions);
            finalHTML = strTitle;
        } else {
            console.log("Some Error Occured!");
        }
    }
    xhr.send();

    finalHTML += "<section class='row'>";

    var strHTML = "";

    // Getting in Menu HTML
    var xhr1 = new XMLHttpsRequest;
    xhr1.open("GET", menuHTML, false);
    xhr1.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            strHTML = this.responseText;
        } else {
            console.log("Some Error Occured!");
        }
    }
    xhr1.send();

    var menusURL = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
    menusURL += short_name;

    //Getting All Menus from URL
    var xhr2 = new XMLHttpsRequest;
    xhr2.open("GET", menusURL, false);
    xhr2.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var Mshort_name = "";
            var price_small = "";
            var small_portion_name = "";
            var price_large = "";
            var large_portion_name = "";
            var Mname = "";
            var Mdesc = "";
            for (var i = 0; i < obj.menu_items.length; i++) {
                Mshort_name = obj.menu_items[i].short_name;
                Mname = obj.menu_items[i].name;
                Mdesc = obj.menu_items[i].description;
                price_large = obj.menu_items[i].price_large;
                price_small = obj.menu_items[i].price_small;
                small_portion_name = obj.menu_items[i].small_portion_name;
                large_portion_name = obj.menu_items[i].large_portion_name;
                finalHTML += strHTML;
                finalHTML = insertProperty(finalHTML, "short_name", Mshort_name);
                finalHTML = insertProperty(finalHTML, "catShortName", short_name);
                finalHTML = insertProperty(finalHTML, "price_small", price_small);
                finalHTML = insertProperty(finalHTML, "small_portion_name", small_portion_name);
                finalHTML = insertProperty(finalHTML, "price_large", price_large);
                finalHTML = insertProperty(finalHTML, "large_portion_name", large_portion_name);
                finalHTML = insertProperty(finalHTML, "name", Mname);
                finalHTML = insertProperty(finalHTML, "description", Mdesc);
            }
        } else {
            console.log("Some Error Occured!");
        }
    }
    xhr2.send()


    finalHTML += "</section>";
    console.log(finalHTML);

    //insert HTML
    insertHTML(selector, finalHTML);
}

function chooseRandomCategory(categories) {
    var randomArrayIndex = Math.floor(Math.random() * categories.length);

    // return category object with that randomArrayIndex
    return randomArrayIndex;
}


// Load Single Menu Items
function loadSingleMenuItems() {
    var url = "https://davids-restaurant.herokuapp.com/categories.json";
    var xhr = new XMLHttpsRequest;
    xhr.open("GET", url, false);
    xhr.onload = function () {
        var obj = JSON.parse(this.responseText);
        var index = chooseRandomCategory(obj);
        var cShort_name = obj[index].short_name;
        var cname = obj[index].name;
        var cIns = obj[index].special_instructions;
        console.log(index);
        console.log(cname);
        console.log(cShort_name);
        console.log(cIns);
        loadMenuItems(cShort_name, cname, cIns);
    }
    xhr.send();
}