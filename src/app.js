/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.getElementById("excuse").innerText =
    who[randomNumer(who.length)] +
    " " +
    action[randomNumer(action.length)] +
    " " +
    what[randomNumer(what.length)] +
    " " +
    when[randomNumer(when.length)] +
    ". ";
};

function randomNumer(range) {
  return Math.floor(Math.random() * range);
}
