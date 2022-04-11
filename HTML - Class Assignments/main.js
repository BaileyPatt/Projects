/*
  This Program shows the basic concepts of JavaScript
*/

console.log("Hello World");

 let a = 2 + 5 * (9 + 5) / 4;
 console.log(a); // Logging 'a' on the console

 const training = "DCI Resources";

 a = "Hello World" //Weakly Typed

 function greet(name) {
    console.log("Hello " + name);
 }

 function test() {
   console.log("Testing when this will be printed");
 }

setTimeout (test, 5000);
greet("Bailey");

console.log("Comes Here");

const helloBtn = document.querySelector("#sayHello ")
helloBtn.addEventListener("click", function() {
  alert("Hello!!")
});
let counter = 0;
helloBtn.addEventListener("mouseover", function() {
  console.log("Mouse hover");
})

const languages = document.querySelector("#coding li");

for(language of languages) {
  language.addEventListener("click", function() {
    this.classList.toggle("bluebg");
});
}

const timep = document.querySelector("#currentTime");
const buttontime = document.querySelector("#time");

buttontime.addEventListener("click", () => {
  let date = new Date()
  timep.innerhtml = date;
})
