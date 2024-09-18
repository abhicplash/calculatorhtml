var display = document.getElementById("display");
console.log(display);
// display.value = "calcu";
var buttonlist = Array.from(document.getElementsByClassName("btn"));

// console.log(buttonlist);

buttonlist.map((list) => {
  list.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.value = "";
        break;
      case "=":
        display.value = eval(display.value);
        break;
      case "DEL":
        display.value = display.value.slice(0, -1);
        break;
      default:
        display.value = display.value + e.target.innerText;
    }
  });
});

// let display = document.getElementById("display");
// console.log(display);
// let buttons = Array.from(document.getElementsByClassName("btn"));

// console.log(buttons);
// // console.log(btns);
// buttons.map((button) => {
//   button.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "C":
//         display.innerText = "";
//         break;
//       case "<":
//         if (display.innerText) {
//           display.innerText = display.innerText.slice(0, -1);
//         }
//       case "=":
//         display.innerText = eval(display.innerText);
//         break;
//       default:
//         display.innerText += e.target.innerText;
//     }
//   });
// });

// var display = document.getElementById("display");
// console.log(display);
// var buttons=Array.from(document.getElementsByClassName('btn'))

// buttons.map((button)=>{
//   button.addEventListener("click",(e)=>{
//     switch(e.target.innerText){
//       default:display.innerText=e.target.innerText
//     }
//   })
// })

// var a = 60;
// switch (a) {
//   case 1:
//     document.write("monday");
//     break;
//   case 2:
//     document.write("tu");
//     break;

//   case 3:
//     document.write("wedday");
//     break;

//   case 4:
//     document.write("thuday");
//     break;

//   case 5:
//     document.write("friday");
//     break;

//   case 6:
//     document.write("saturday");
//     break;

//   case 7:
//     document.write("sunday");
//     break;
//   default:
//     document.write("invalid")
// }

// for(i=0;i<100;i++){
//   document.write(i+"<br>")
// }
// i = 1;
// while (i <= 100) {
//   document.writeln(i);
//   i++;
// }
// var i = 0;
// do {
//   document.write(i+"<br>")
//   i++;
// } while (i < 100);
// if (101 % 2 == 0) {
//   document.write("even");
// } else {
//   document.write("odd");
// }
// function change() {
//   alert("haaaaaaaaaai");
// }
