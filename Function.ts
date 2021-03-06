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

// function without using interface

function main4(person: { firstname: string; lastname: string }) {
  return console.log(`${person.firstname}${person.lastname}`);
}

let p = {
  firstname: "sakthi",
  lastname: "vel",
};

main4(p);

// function with using interface

interface person {
  firstname: string;
  lastname: string;
}

function main5(person: person) {
  console.log(`${person.firstname}${person.lastname}`);
}

let person = {
  firstname: "sathish",
  lastname: "kumar",
};
main5(person);

//any

function main6(name: any) {
  console.log(name);
}

main6(1);
main6("sakthi");
main6(true);
