const dateIsValid = (value) => {
  var matches = value.match(/(\d{1,2})[- /](\d{1,2})[- /](\d{4})/)
  if (!matches) return false

  // parse each piece and see if it makes a valid date object
  var month = parseInt(matches[1], 10)
  var day = parseInt(matches[2], 10)
  var year = parseInt(matches[3], 10)

  if (month < 1 || month > 12) return false
  if (day < 1 || day > 31) return false
  if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) return false
  if (month === 2) { // check for february 29th
    var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
    if (day > 29 || (day === 29 && !isleap)) {
      return false
    }
  }

  return true  // date is valid

}


const validate = values => {
  const errors = {}
  if (!values.zipCode) {
    errors.zipCode = "Required"
  } else if (values.zipCode.length !== 5 ) {
    errors.zipCode = "Please enter a valid zip code."
  }
  if (!values.birthDate) {
    errors.birthDate = "Required"
  } else if (!dateIsValid(values.birthDate)) {
    errors.birthDate = "This isn't a valid date."
  }
  if (!values.getErections) {
    errors.getErections = "Please select an option."
  }
  if (!values.problemsBegan) {
    errors.problemsBegan = "Please select an option."
  }
  if (!values.premature) {
    errors.premature = "Please select an option."
  }
  if (!values.wakingErection) {
    errors.wakingErection = "Please select an option."
  }
  if (!values.masturbatingErection) {
    errors.masturbatingErection = "Please select an option."
  }
  
  return errors
}

export default validate