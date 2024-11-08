;
(function () {
    var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // const numbers1: number[] -> Tipo implícito
    var numbers2 = [1, 2, '3', 4, 5, '6', 7, 8, '9', 10]; // const numbers2: (string | number)[]
    var numbers3 = [null, 2, '3', 4, 5, '6', 7, 8, '9', 10]; // const numbers3: (string | number | null)[]
    var numbers4 = [null, 2, '3', 4, 5, '6', 7, false, '9', true]; // const numbers4: (string | number | boolean | null)[]
    // numbers1.TodosLosMétodosFuncionalesDelTipoArray
    // numbers1.push(true) --> Argument of type 'boolean' is not assignable to parameter of type 'number'
    numbers1.push(22);
    // numbers2.push(false) --> Argument of type 'boolean' is not assignable to parameter of type 'string | number'
    numbers2.push('48');
    // ...etc
    console.log({ numbers1: numbers1, numbers2: numbers2, numbers3: numbers3, numbers4: numbers4 });
    var letters = ['a', 'b', 'c', 'd'];
    // Array<string>.forEach(callbackfn: (value: STRING, index: number, array: string[]) => void, thisArg?: any): void
    letters.forEach(function (letter) {
        // (parameter) letter: string
        console.log(letter.toUpperCase());
    });
})();
