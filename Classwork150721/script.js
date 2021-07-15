// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// const numbers = [
//     25, 49.5, 0, -18, 0.1
// ];
// console.log(numbers);
//
// const users = ['Olena', 'Olya', 'Mike', 'Peter', '43'];
// console.log(users);
//
// const difValues = [25, '25', 'Mars', true, false];
// console.log(difValues);
//
//
// //-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const values = [];
// values[0] = 25;
// values[2] = 'Olya';
// values[1] = true;
// values[5] = 44;
// console.log(values);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// const numbers = [1, 23, 45, 78, 46, 98, 47, 49, 99, 999];
// document.write('<div>')
// for (const number of numbers) {
//     document.write(`<div>${number}</div>`)
//
// }
// document.write('</div>')


// const numbers = [1, 23, 45, 78, 46, 98, 47, 49, 99, 999];
// document.write('<div>')
// for (let i = 0; i < numbers.length; i++) {
//     document.write(`<div>${[i]} ${numbers[i]}</div>`)
//
// }
// document.write('</div>')


// const fruits = ['apple', 'lemon', 'pearl', 'plum', 'peach', 'strawberry', 'blueberry', 'banana', 'mango', 'kiwi'];
// document.write('<div>')
// for (let i = 0; i < fruits.length; i++) {
//
//
//     document.write(`<div>${[i]} ${fruits[i]}</div>`);
// }
// document.write('</div>')



// const text = [236, 784, 526, 478, 258, 48, 12, 14, 65, 25, 78, 25, 89, 78, 987, 16, 999, 869, 987, 23]
// document.write('<div>')
// let i = 0;
// while (i<text.length-1){
//     document.write(`<h1>${text[i]}</h1>`);
//     i++;
// }
// document.write('</div>')

// const text = [236, 784, 526, 478, 258, 48, 12, 14, 65, 25, 78, 25, 89, 78, 987, 16, 999, 869, 987, 23]
// document.write('<div>')
// let i = 0;
// while (i<text.length){
//     document.write(`<h1>${[i]} - ${text[i]}</h1>`);
//     i++;
// }
// document.write('</div>')


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// const numbers = [23, 53, 78, 96, 58, 42, 47, 45, 98, 0, 10];
// for (const number of numbers) {
//     console.log(`${number}`);
// }
//
// const str = ['Mike', 'Peter', 'Eshly', 'Sam', 'Bob', 'Kyle', 'Adam', 'Ross', 'Joy', 'Chandler'];
// for (const user of str) {
//     console.log(`${user}`);
// };
//
// const difValues = [12, 'Peter', true, false, 129, -15, 'Mike', 'Bob', true, 0];
// for (const value of difValues) {
//     if(typeof value === 'boolean'){
//         console.log(`${value}`)}};

// const difValues = [12, 'Peter', true, false, 129, -15, 'Mike', 'Bob', true, 0];
// for (const value of difValues) {
//     if (typeof value === 'number') {
//         console.log(`${value}`)
//     }
// }
// ;

// const difValues = [12, 'Peter', true, false, 129, -15, 'Mike', 'Bob', true, 0];
// for (const value of difValues) {
//      if (typeof value === 'string'){
//         console.log(`${value}`);
//     } };

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// const arr = [];
// arr[0] = 1;
// arr[1] = true;
// arr[2] = 'pool';
// arr[3] = 'cool';
// arr[4] = 999;
// arr[5] = -15;
// arr[6] = true;
// arr[7] = 'bambaley';
// arr[8] = false;
// arr[9] = 111;
// document.write('<div>')
// for (let i = 0; i < arr.length; i++){
//     console.log(`${arr[i]}`);
//     document.write(`<div>${arr[i]}</div>`);
// }
// document.write('</div>');
// const arr = [];
// arr[0] = 1;
// arr[1] = true;
// arr[2] = 'pool';
// arr[3] = 'cool';
// arr[4] = 999;
// arr[5] = -15;
// arr[6] = true;
// arr[7] = 'bambaley';
// arr[8] = false;
// arr[9] = 111;
// document.write('<div>')
// for (let i = 0; i < 100; i++){
//     console.log(`${arr[i]}`);
//     document.write(`<div>${arr[i]}</div>`);
// }
// document.write('</div>');

// const arr = [];
// arr[0] = 1;
// arr[1] = true;
// arr[2] = 'pool';
// arr[3] = 'cool';
// arr[4] = 999;
// arr[5] = -15;
// arr[6] = true;
// arr[7] = 'bambaley';
// arr[8] = false;
// arr[9] = 111;
// document.write('<div>')
// for (let i = 0; i < 100; i=i+2){
//     console.log(`${arr[i]}`);
//     document.write(`<div>${arr[i]}</div>`);
// }
// document.write('</div>');

// const arr = [];
// arr[0] = 1;
// arr[1] = true;
// arr[2] = 'pool';
// arr[3] = 'cool';
// arr[4] = 999;
// arr[5] = -15;
// arr[6] = true;
// arr[7] = 'bambaley';
// arr[8] = false;
// arr[9] = 111;
// document.write('<div>')
// for (let i = 0; i < 100; i++){
//     if(i%2 === 0){
//     console.log(`${arr[i]}`);
//     document.write(`<div>${arr[i]}</div>`);
// }}
// document.write('</div>');

// const arr = [];
// arr[0] = 1;
// arr[1] = true;
// arr[2] = 'pool';
// arr[3] = 'cool';
// arr[4] = 999;
// arr[5] = -15;
// arr[6] = true;
// arr[7] = 'bambaley';
// arr[8] = false;
// arr[9] = 111;
// document.write('<div>')
// for (let i = 0; i < 100; i++){
//     if(i%2 !== 0){
//         console.log(`${arr[i]}`);
//         document.write(`<div>${arr[i]}</div>`);
//     }}
// document.write('</div>');

// - Дано 2 масиви з рівною кількістю об'єктів.
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
// Масиви:

    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];


let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (const user of usersWithId) {
    for (let city of citiesWithId) {
        if(user.id === city.user_id){
            user.address = city
        }
    }
    console.log(user);
}

