"use strict";
(() => {
    const a = 10; // const a: 10 => El tipo de dato es 10; porque es una constante (const)
    let b = 10; // let b: number => El tipo de dato es number; porque es una variable (let)
    //* Siempre se debe especificar el tipo de dato
    let k = 10;
    let l;
    l = 3.14159265;
    //! l = 'prueba' // Type 'string' is not assignable to type 'number'
    //* Difiere el tipo :any
    let i; //: any
    i = "hola";
    i = 16;
    i = true;
    i = null;
    /*
    function sayHello1(msg) {
      console.log(msg + 2);
      msg.???
    }
    ! Parameter 'msg' implicitly has an 'any' type. => Esto es por la regla
    * {"noImplicitAny": true} del archivo tsconfig.json
    sayHello1("hola");
    */
    function sayHello2({ msg }) {
        console.log(msg);
        // msg.TodosLosMétodosDelTipoString;
    }
    sayHello2({ msg: "hola" });
})();
