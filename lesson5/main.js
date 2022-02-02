const isNumber = (num) => {
    
  if (!isNaN(parseFloat(num)) && isFinite(num) && !(/\s/.test(num)) && num !== null)
      return true;
  else 
      return false;
}

console.log(isNumber("  123"));