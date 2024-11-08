;(() => {
  /*
  ! :any es el equivalente al !important en CSS
  ! ¡Evitar usarlo!
  ! ¡Evitar usarlo!
  ! ¡Evitar usarlo!
  ! ¡Evitar usarlo!
  ! ¡Evitar usarlo!
 */

  let x = 123 // let x: number -> Tipo de dato inferido
  let y // let y: any -> Tipo de dato inferido

  let avenger: any = 654
  avenger = 'Dr. Strange'
  // console.log(avenger.???) // Pierdo todas las inferencias de los métodos funcionales de cada tipo
  console.log(avenger.charAt(0))

  // "Casteos"
  console.log((avenger as string).charAt(0)) // Al tratarlo como un string, tengo todos los métodos funcionales del tipo string
  console.log(<string>avenger.charAt(0)) // Al tratarlo como un string, tengo todos los métodos funcionales del tipo string
  // Son equivalentes las dos formas

  avenger = 150.15
  // console.log(avenger.???) // Pierdo todas las inferencias de los métodos funcionales de cada tipo
  console.log(avenger.toFixed(2))

  let marvel: number = 789
  // console.log(marvel.TodosLosMétodosFuncionalesDelTipoNumber)
  console.log(marvel.toFixed(2))
})()
