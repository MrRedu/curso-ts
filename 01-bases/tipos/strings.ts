;(() => {
  const batman = 'batman'
  const superman = 'superman'
  const flash = `flash`

  console.log(`I'm ${batman}`)
  console.log(batman.toUpperCase())

  // console.log(batman[10].toUpperCase()) // Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')
  // console.log(batman[10]?.toUpperCase()) // undefined

  console.log(batman[10]?.toUpperCase() || 'No tiene décimo primer carácter')

  console.log({ batman, superman, flash })
})()
