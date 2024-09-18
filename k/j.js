let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("butt"));
display.innerText = 98;

let btn = document.querySelector(". btn");

btn.addEventListener("click",e=>{
  alert("hiiiiiiiii")

});
// buttons.map((list) => {
//   list.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "C":
//         display.innerText = "";
//         break;
//       case "=":
//         display.innerText = eval(display.innerText);
//         break;
//       default:
//         display.innerText += e.target.innerText;
//     }
//   });
// });
