export default function printMe() {
  console.log("I get called from print.js!");

  const name = "James";

  const person = { first: name };

  console.log(person);

  const sayHelloLinting = (fName) => {
    console.log(`Hello linting, ${fName}`);
  };
}
