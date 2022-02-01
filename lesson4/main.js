const foo = (str) => {
  if (typeof str !== "string")
    console.log("тут не строка");
  else {
    str = str.trim();
    console.log(str);
  }
  if (str.length > 30){
    str = str.substring(0, 30) + "...";
    console.log(str);
  } 
}

foo("   123")