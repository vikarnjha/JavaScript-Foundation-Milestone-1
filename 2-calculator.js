function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);
}
calculator(4, 2, "+");
calculator(4, 2, "-");
calculator(4, 2, "*");
calculator(4, 2, "/");
calculator(4, 2, "%");

