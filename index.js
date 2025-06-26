// let age = 20;
// // "Вам ... років"

// let consoleMessage;

// consoleMessage = 'Вам ' + age + ' років';

// console.log(consoleMessage);

// //console.log('hello')\


// let result = 4;
// let mathResult = '2 + 2 = ' + result;
// console.log(mathResult);


let age = 30;
age >= 20 && age <30;
console.log(age);

let age1 = 35;
age1 >= 20 || age1 <= 40;
console.log(age1);

let userName = '';
let consoleMessage = 'Hello ' + (userName || 'Анонім');
console.log(consoleMessage); 


//let result = prompt('How old are you?');
// let num = Number(result);
// console.log(num);
//console.log(Munber(result));
//alert(Number(result));


//let result = prompt('Скільки місяців ви вивчаєте JavaScript?');
//console.log('Я вивчаю JavaCsript ' + result + ' місяця(ів)' )

//let sum = 5;
//if (2+2 === sum) {
  //  console.log('two plus two is really four')
//}

//console.log('another console for cheking')

/* Оператор if

if (умова, яка має повертати логічне значення) {
    блок коду,, який виконується, якщо умова = true
}
    */

/* Оператор if-else

if (умова, яка має повертати логічне значення) {
    блок коду, який виконується, якщо умова = true
} ele {
    блок коду, який виконується, якщо умова = false
}

*/

let sum = 4;
if (2+2 === sum) {
    console.log('two plus two is really four')
} else {
    console.log('Рівняння було невірне')
}
console.log('another console for cheking')

let numb = Number(prompt('Введіть число більше 20'));
if (numb >= 20) {
    alert('Це правильне число');
} else {
    alert('Це число не підходить');
}