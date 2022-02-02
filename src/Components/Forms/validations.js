
export function validateEmptyInput (value) {
  let error = null
  if (value.trim() === '') {
    error = 'Este campo es obligatorio'
  }
  return error
}

export function validateDNI (dni) {
  const dniValidator = /^[XYZ]?\d{5,8}[A-Z]$/
  let allLetters = 'TRWAGMYFPDXBNJZSQVHLCKET'
  let number, letter
  let error = validateEmptyInput(dni)
  number = dni.substr(0, dni.length - 1)
  number = number % 23
  letter = dni.substr(dni.length - 1, 1)
  allLetters = allLetters.substring(number, number + 1)

  if (!error && dniValidator.test(dni) === false) {
    error = 'Dni erroneo, formato no válido'
  }
  if (!error && allLetters !== letter.toUpperCase()) {
    error = 'Dni erroneo, la letra del NIF no se corresponde'
  }

  return error
}
