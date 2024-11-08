(() => {
  let isSuperman: boolean = true;
  // isSuperman = undefined; // Type 'undefined' is not assignable to type 'boolean'.

  let isBatman: boolean;
  console.log(isBatman); // undefined // Is used before being assigned.
  isBatman = false;
  console.log(isBatman);

  isSuperman = true && false;
  console.log(isSuperman); // false
  isSuperman = true && true;
  console.log(isSuperman); // true
})();
