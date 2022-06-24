let firstNum = 0;
let secondNum = 0;

op = prompt('Which Operation Do You What To Perform? (+, -, *, /)');
firstNum = parseFloat(prompt("Enter First Number"));
secondNum = parseFloat(prompt("Enter Second Number"));

if (op == "+") {alert(firstNum + secondNum);}
else if (op == "-") {alert(firstNum - secondNum);}
else if (op == "*") {alert(firstNum * secondNum);}
else if (op == "/") {alert(firstNum / secondNum);}
else {alert("Syntax Error!")}
