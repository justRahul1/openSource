"use strict";

const form = document.querySelector(".form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const profession = document.querySelector("#profession");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const resume = document.querySelector("#resume");
const imageLink = document.querySelector("#imageLink")
const image = document.querySelector("#image");
const facebook = document.querySelector("#facebook");
const twitter = document.querySelector("#twitter");
const instagram = document.querySelector("#instagram");
const linkedin = document.querySelector("#linkedin");
const allInp = document.querySelectorAll("input");

// function for validating form
function formValidation() {
  const firstNameVal = firstName.value.trim().split(" ").join("");
  const lastNameVal = lastName.value.trim().split(" ").join("");
  const professionVal = profession.value.trim();
  const emailVal = email.value.trim().split(" ").join("");
  const phoneVal = phone.value.trim();
  const resumeVal = resume.value.trim().split(" ").join("");
  const imageLinkVal = imageLink.value.trim().split(" ").join("");
  const imageVal = image.files[0];
  const facebookVal = facebook.value.trim().split(" ").join("");
  const twitterVal = twitter.value.trim().split(" ").join("");
  const instagramVal = instagram.value.trim().split(" ").join("");
  const linkedinVal = linkedin.value.trim().split(" ").join("");

  let isvalid = true;

  // validation for first name
  if (firstNameVal.length <= 2) {
    firstName.classList.remove("sucess");
    firstName.classList.add("error");
    firstName.value = "";
    firstName.placeholder = "Name is too small!!";
    isvalid = false;
  } else if (firstNameVal.length > 10) {
    firstName.classList.remove("sucess");
    firstName.classList.add("error");
    firstName.value = "";
    firstName.placeholder = "Name is too long";
    isvalid = false
  } else {
    firstName.classList.remove("error");
    firstName.classList.add("sucess");
    isvalid;
  }

  // validation for last name
  if (lastNameVal.length <= 1) {
    lastName.classList.remove("sucess");
    lastName.classList.add("error");
    lastName.value = "";
    lastName.placeholder = "Name is too small!!";
    isvalid = false;
  } else if (lastNameVal.length > 10) {
    lastName.classList.remove("sucess");
    lastName.classList.add("error");
    lastName.value = "";
    lastName.placeholder = "Name is too long";
    isvalid = false;
  } else {
    lastName.classList.remove("error");
    lastName.classList.add("sucess");
    isvalid;
  }

  // validation for profession
  if (professionVal.length <= 1) {
    profession.classList.remove("sucess");
    profession.classList.add("error");
    profession.value = "";
    profession.placeholder = "profession is too small!!";
    isvalid = false;
  } else {
    profession.classList.remove("error");
    profession.classList.add("sucess");
    isvalid;
  }

  //  validation for email
  if (emailVal.length <= 1) {
    email.classList.remove("sucess");
    email.classList.add("error");
    email.value = "";
    email.placeholder = "E-mail is too small!!";
    isvalid = false;
  } else {
    email.classList.remove("error");
    email.classList.add("sucess");
    isvalid;
  }

  //  validation for Phone number
  if (phoneVal.length == 14 || phoneVal.length == 10) {
    phone.classList.remove("error");
    phone.classList.add("sucess");
    isvalid;
  } else {
    phone.classList.remove("sucess");
    phone.classList.add("error");
    phone.value = "";
    phone.placeholder = "Given contact no. isn't correct";
    isvalid = false;
  }

  // validation for Resume link
  if (!resumeVal) {
    resume.classList.remove("sucess");
    resume.classList.add("error");
    resume.value = "";
    resume.placeholder = "Resume link can't be blank";
    isvalid = false;
  } else {
    resume.classList.remove("error");
    resume.classList.add("sucess");
    isvalid;
  }

// updating user information to local storage & Re-directing to user Generated portfolio
if (isvalid){
    console.log("succesfull");
    window.location.href = "portfolio.html";
}else{
    console.log("Some error occured")
}

// Saving file chosen image information to localstorage
if(imageVal){
const reader = new FileReader();
reader.readAsDataURL(imageVal);
reader.onload = function () {
  const base64Image = reader.result;
  localStorage.setItem("imageFile", base64Image);
};
}
}




form.addEventListener("submit", (e) => {
  e.preventDefault();

  formValidation();
});


// saving userInfo in local storage as object
let userInfo = JSON.parse(localStorage.getItem("UserInfo")) || {};

allInp.forEach((allInpVal) => {
    allInpVal.addEventListener("input", (e) => {
        userInfo[allInpVal.id] = allInpVal.value
        localStorage.setItem("UserInfo", JSON.stringify(userInfo))
    })

})
