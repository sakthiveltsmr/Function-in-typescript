//function declaration

function main(num1: number, num2: number) {
  return console.log(num1 * num2);
}

main(2, 3);

//function with parameter assign value

function main2(num1: number, num2: number = 5) {
  return console.log(num1 + num2);
}

main2(3);

//function with optional parameter

function main3(num1: number, num2?: number) {
  if (num2) {
    return console.log(num1 + num2);
  } else {
    return console.log(num1);
  }
}

main3(2);
