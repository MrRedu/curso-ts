;
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var FuerzaSuperHeroes;
    (function (FuerzaSuperHeroes) {
        FuerzaSuperHeroes[FuerzaSuperHeroes["Aquaman"] = 0] = "Aquaman";
        FuerzaSuperHeroes[FuerzaSuperHeroes["Batman"] = 1] = "Batman";
        FuerzaSuperHeroes[FuerzaSuperHeroes["Flash"] = 5] = "Flash";
        FuerzaSuperHeroes[FuerzaSuperHeroes["Superman"] = 100] = "Superman";
    })(FuerzaSuperHeroes || (FuerzaSuperHeroes = {}));
    var fuerzaAquaman = FuerzaSuperHeroes.Aquaman;
    var fuerzaBatman = FuerzaSuperHeroes.Batman;
    var fuerzaFlash = FuerzaSuperHeroes.Flash;
    var fuerzaSuperman = FuerzaSuperHeroes.Superman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    // const largoDelPoder: number = <string>poder.length
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
