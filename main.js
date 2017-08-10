
let single = document.getElementsByClassName("single");
let operations = document.getElementsByClassName("operations");
let clear = document.getElementById("clear");

// Sets the value of the button pushed as its unique value and adds it to the total value string
for (let i = 0; i < single.length; i++) {
  single[i].addEventListener("click", function() {
      let inputValue = entryText.value;
      let buttonValue = this.textContent;
        entryText.value += buttonValue;
  })
}

// Set the value of the operator to its unique value and adds it to the total value string
for (let i = 0; i < operations.length; i++) {
   operations[i].addEventListener("click", function() {
     let inputValue = entryText.value;
     let buttonValue = this.textContent;
     if (buttonValue !== "=") {
       entryText.value += buttonValue;
     }
  })
}

// Using eval will trigger the equal function to take place, this handles order of operations too
function total(){
  entryText.value = eval(entryText.value) || "";
}

// Set the entry value to " " will clear the screen
function clearEntry(){
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
