//Задание номер 1
/* 
let arr = [12, 3444, 555, 3434, 22, 43, 100];

for (let i = 0; i < arr.length; i++) {
    arr[i] = String(arr[i]);
    if (arr[i].substr(0, 1) === "2" || arr[i].substr(0, 1) === "4") {
        arr[i] = parseFloat(arr[i])
        console.log(arr[i] + " имеет тип " + typeof arr[i]);

    }
}
*/

//Задание номер 2
let arr = [];
let arrPrimeNumber = [];

for (let i = 1; i < 100; i++) {
    arr.push(i);
}

for (let i = 1; i < arr.length; i++) {
    let temp = true;
    for (let j = 2; j < i; j++) {
        if (arr[i] % j == 0) {
            temp = false;
            break;
        }
    }
    if (temp) {
        arrPrimeNumber.push(arr[i]);
    }
}

console.log(arrPrimeNumber);