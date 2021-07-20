// - створити функцію яка обчислює та повертає площу прямокутника висотою

// function areaRectangle(a, b){
//     return a * b;
//
// }
//
// console.log(areaRectangle(4, 3));
// - створити функцію яка обчислює та повертає площу кола

// let areaCircle = function (r){
//     return 3.14 * r ** 2;
// }
// console.log(areaCircle(6));
// console.log(areaCircle(5));
// - створити функцію яка обчислює та повертає площу циліндру

// function areaCylinder(h, r){
//     let rez = (2 * 3.14 * r **2) + (2 * 3.14 * h * r);
//     return rez;
// }
//
// console.log(areaCylinder(5, 3));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax(){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++){
//         if( arguments[i] < min){
//             min = arguments[i];
//         } else if(arguments[i] > max){
//             max = arguments[i];
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(minMax(1, 23, 56, 9, -98, 189, 0, -789));

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
// function createDiv(text) {
//     document.write(`<div>${text}</div>`);
// }
// createDiv('JS is not easy')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createLi(text) {
//     document.write(`<ul>
//          <li>${text}</li>
//          <li>${text}</li>
//          <li>${text}</li>
//                   </ul>`)
//
// }
// createLi('We are the champions')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createLi(text, num) {
//     for (let i = 0; i < num; i++){
//     document.write(`<ul>
//          <li>
//          ${text}</li>
// </ul>`);
// }}
//     console.log(createLi('help', 3));

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createValue = function (arr) {
            document.write(`<ul>`)
for (const arrElement of arr) {
    document.write(`<li>${arrElement}</li>`)
}

document.write(`</ul>`);
}
console.log(createValue([1, 2, 5, true, false, 'blue']));
