var form1 = document.querySelector(".form1");
var form2 = document.querySelector(".form2");
var form3 = document.querySelector(".form3");

var nxt1 = document.getElementById("next1");
var nxt2 = document.getElementById("next2");

var prv1 = document.getElementById("previous1");
var prv2 = document.getElementById("previous2");

var submitbutton = document.getElementById("submitbtn");

var form = document.getElementById("form-main");

var nameUser = document.getElementById("username");
var email = document.getElementById("email");
var pass = document.getElementById("password");

nxt1.onclick = function () {
    if (nameUser.value == " " || email.value == "" || pass.value == "") {
        alert("blank not allowed");

        return false;
    }
    else {
        form1.style.left = "-300px";
        form2.style.left = "100px";
        return true;
    }
}

var git = document.getElementById("github");
var linkedin = document.getElementById("linkedin");
var medium = document.getElementById("medium");

nxt2.onclick = function () {
    if (git.value == " " || linkedin.value == "" || medium.value == "") {
        alert("blank not allowed");

        return false;
    }
    else {
        form2.style.left = "-300px";
        form3.style.left = "100px";
        return true;
    }

}
prv1.onclick = function () {
    form2.style.left = "-300px";
    form1.style.left = "100px";

}
prv2.onclick = function () {
    form3.style.left = "-300px";
    form2.style.left = "100px";

}


/*
form.addEventListener("submit", function(e){
     e.preventDefault();
     console.log("form has been submitted");
})
*/
var date = document.getElementById("date");
var mobile = document.getElementById("mobile");
/*
function validate() {
    event.preventDefault();
    if (date.value == "" || mobile.value == "") {
        alert("no blank");
        return false;
    }
    else {
        console.log("form submitted");

        var formData = new FormData(form);
        var name = formData.get('nameUser');
        //console.log(nameUser.value);
        alert("hello aaina");
        return true;

    }


}
*/

var formData = new FormData(form);
var name = formData.get('nameUser');

//var formEl = document.forms.form-main;
//var formData = new FormData(formEl);
//var name = formData.get('nameUser');