
let single = document.getElementsByClassName("single");
let operations = document.getElementsByClassName("operations");
let clear = document.getElementById("clear");


for (let i = 0; i < single.length; i++) {
  single[i].addEventListener("click", function() {
      let inputValue = entryText.value;
      let buttonValue = this.textContent;
        entryText.value += buttonValue;
        // console.log(entryText.value);
  })
}

for (let i = 0; i < operations.length; i++) {
   operations[i].addEventListener("click", function() {
     let inputValue = entryText.value;
     let buttonValue = this.textContent;
     if (buttonValue !== "=") {
       entryText.value += buttonValue;
     }
  })
}

function total(){
  entryText.value = eval(entryText.value) || "";
}

function clearDisplay(){
  let buttonValue = this.textContent;
    entryText.value = " ";
}






















// function numbers() {
//     let inputValue = entryText.value;
//     let buttonValue = this.textContent;
//       entryText.value += buttonValue;
//       // console.log(entryText.value);
// }
//
//
// function operations() {
//    let inputValue = entryText.value;
//    let buttonValue = this.textContent;
//    if (buttonValue !== "=") {
//      entryText.value += buttonValue;
//    }
// }
