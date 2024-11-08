;
(function () {
    // const abc = (): never => {} -> A function returning 'never' cannot have a reachable end point
    // never = error
    // El tipo de dato 'never' en una función, generalmente quiere decir que va a terminar con un error
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('error');
})();
