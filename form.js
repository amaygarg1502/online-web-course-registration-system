function fun() {
  var characters = /^[A-Za-z ]+$/;
  var numbers = /^[0-9]+$/;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var userName = document.getElementById("name").value;
  var zipcode = document.getElementById("zcode").value;
  var userEmail = document.getElementById("email").value;
  var usergender = document.getElementById("male");
  var usergender2 = document.getElementById("female");
  var userLang1 = document.getElementById("lang1");
  var userLang2 = document.getElementById("lang2");
 

  if (userName.length == 0) {
    window.alert("Name shouldn't be empty please try again..!");
  } else if (!characters.test(userName)) {
    window.alert("Name should contain alphabates characters only..!");
  }
 
  if (zipcode.length == 0) {
    window.alert("zip code shouldn't be empty please try again..!");
  } else if (!numbers.test(zipcode)) {
    window.alert("zip code should contain numbers only..!");
  }
  if (userEmail.length == 0) {
    window.alert("Email shouldn't be empty please try again..!");
  } else if (!validRegex.test(userEmail)) {
    window.alert("Invalid Email Address please try again..!");
  }
  if (!usergender.checked) {
    if (!usergender2.checked) {
      window.alert("please choose your gender..!");
    }
  }
  if (!userLang1.checked) {
    if (!userLang2.checked) {
      window.alert("please choose your Language..!");
    }
  }
}