const isNumber = (num) => {
  return (!isNaN(parseFloat(num)) && isFinite(num) && !(/\s/.test(num)))
}

console.log(isNumber("123"));