;(() => {
  const callBatman = (): void => {
    // return 1 -> Type 'number' is not assignable to type 'void'
    return
  }

  const a = callBatman()
  console.log(a)
})()
