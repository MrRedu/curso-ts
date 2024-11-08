;(() => {
  const normalArray = ['String', 35, true] // const normalArray: (string | number | boolean)[]
  // Los valores del array pueden ser string, number o boolean;
  //...la diferencia con las tuples...
  const normalTuple: [string, number, boolean] = ['String', 35, true] // const normalTuple: [string, number, boolean]
  // ...la diferencia con las tuples...
  // Es que las tuples son de un solo tipo de dato
  // En este caso, el tipo de normalTuple quiere decir que siempre debe ser:
  // [0] primer ítem un string
  // [1] el segundo un number
  // [2] el tercero un boolean

  // normalTuple[0] = undefined -> Type 'undefined' is not assignable to type 'string'
  // normalTuple[1] = 'string' --> Type 'string' is not assignable to type 'number'
  // normalTuple[2] = 25 -> Type 'number' is not assignable to type 'boolean'

  console.log({ normalArray, normalTuple })
})()
