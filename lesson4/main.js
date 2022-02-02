const foo = (str) => {
  if (typeof str !== "string") {
    console.log("тут не строка");
  }
  else {
    str = str.trim();
    if (str.length > 30){
      str = str.substring(0, 30) + "...";
      console.log(str);
    } else {
      console.log(str);
    }
  }
}

foo("   123asdfkasdflasdkfjlskfjd;als")