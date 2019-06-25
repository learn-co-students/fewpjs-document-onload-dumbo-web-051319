// Your code goes here
// if (document.readyState === "complete") {
//   console.log("The DOM has loaded");
  document.addEventListener("DOMContentLoaded", function() {
      console.log("The DOM has loaded");
      document.querySelector("#text").innerHTML = "This is really cool!";
  });
// }


// function doSomething() {
//   document.querySelector("#text").innerText = "This is really cool!";
// }
//
// if (document.readyState === 'loading') {  // Loading hasn't finished yet
//   debugger;
//   document.addEventListener('DOMContentLoaded', doSomething);
// } else {  // `DOMContentLoaded` has already fired
//   doSomething();
// }
