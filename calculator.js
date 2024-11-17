"uase strict";
let val1 = 0;
let val2 = 0;
let action = "";
let result = 0;

function add() {
  val1 = +document.getElementById("num").value;
  console.log(val1);
  action = "+";
}

function calc() {
  val2 = +document.getElementById("num").value;
  let expr = val1 + action + val2;
  console.log(expr);
  result = eval(expr);
  console.log(result);
  document.getElementById("num").value = result;
}

function reset() {
  let val1 = 0;
  let val2 = 0;
  let action = "";
  let result = 0;
  document.getElementById("num").value = 0;
}

reset();
