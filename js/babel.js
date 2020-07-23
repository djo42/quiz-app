"use strict";

var home = document.querySelector(".nav__home");
var quiz = document.querySelector(".quiz");
var create = document.querySelector(".create");
var profile = document.querySelector(".profile");
home.addEventListener('click', function () {
  quiz.classList.remove("invisible");
  create.classList.add("invisible");
  profile.classList.add("invisible");
});