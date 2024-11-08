;
(function () {
    var _a;
    var batman = 'batman';
    var superman = 'superman';
    var flash = "flash";
    console.log("I'm ".concat(batman));
    console.log(batman.toUpperCase());
    // console.log(batman[10].toUpperCase()) // Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')
    // console.log(batman[10]?.toUpperCase()) // undefined
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No tiene décimo primer carácter');
    console.log({ batman: batman, superman: superman, flash: flash });
})();
