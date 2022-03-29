const someNames = ["Petro", "Vasyl", "Ivan"];

someNames.unshift("Puzdlo");
someNames.push(1,2,3);
someNames.splice(2, 0, "aaa")

console.log(someNames);


const someNumbers = [1, 2, 3, 4, 7, 8, 9];

someNumbers.splice(4, 0, 5,6);

console.log(someNumbers);