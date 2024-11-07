const message = "hola mundo"; // const message: "hola mundo"
let msg = "hola mundo"; // let msg: string
// msg = 123; // Type 'number' is not assignable to type 'string'.

const mensaje: string = "Hello world";
console.log(mensaje);

// const PersonType: {
//   name: string;
//   age: number;
// }

const person = {
  name: "John Doe",
  age: 25,
};

// person.age = '26'; // Type 'string' is not assignable to type 'number'.

person.age = 26;

console.log(person.age);
