;
(function () {
    var callBatman = function () {
        // return 1 -> Type 'number' is not assignable to type 'void'
        return;
    };
    var a = callBatman();
    console.log(a);
})();
