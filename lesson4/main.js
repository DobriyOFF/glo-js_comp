let num = 266219;
    mul = 1;
while (num > 0) {
  mul *= num % 10;
  num = Math.floor(num / 10);
}
mul **= 3;
console.log(String(mul).slice(0, 2));