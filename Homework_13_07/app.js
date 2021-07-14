

// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Hello';
// let num = 123;
// let flag = true;
// let txt = 'true';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);


//
// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
// let a1 = 10+20+4;
// console.log(a1)
// let a2 = 2 * 3 + 6;
// console.log(a2)
// let a3 = (111 - 81) * 2;
// console.log(a3)
// let a4 = Math.pow(3, 2) * 10;
// console.log(a4);
// let a5 = 40*2 +7;
// console.log(a5);


//
// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'


// let a6 = 5 % 3;
// console.log(a6);
// a6 = 2;
//
// let a7 = 3 % 5;
// console.log(a7);
// a7 = 3;
//
// let a8 = 5 + '3';
// console.log(a8)
// a8 = 53; //String;
//
// let a9 = '5' -3;
// console.log(a9);
// a9 = 2;
//
//  let a10 = '75kg';
//
// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
// let width = 10;
// let height = 23;
// let s = width * height;
// console.log(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let v = 3.14 * Math.pow((dC/2), 2) * heightC;
// console.log(v);

//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//
// let n = 3;
// let m = 4;
// console.log(Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2)));


//
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let firstName = 'Olena'
// let lastName = 'Lupiy';
// let age = 43;
// let hobby = 'reading'
// alert(`${firstName} \n ${lastName} \n ${age} \n ${hobby}`);
//
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write


// let str1 = 'Who';
// let str2 = 'are';
// let str3 = 'you?';
// let concatenation = `${str1} ${str2} ${str3}`;
// console.log(concatenation);
// document.write( `${str1} ${str2} ${str3}`);

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
/
// 205;
// 15;
//40
//10


//
//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let num1 = +prompt('Enter the first number');
// let num2 = +prompt('Enter the second number');
// let sum = num1 + num2;
// alert(sum)
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert


// let myName = prompt('Enter your name');
// let myLastName = prompt('Enter your sirname');
// let myAge = +prompt('Enter your age');
// alert(`Good evening, ${myName} ${myLastName}, congratulate you with your ${myAge} years`);
//
//
// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = +prompt('Enter number');
// let b = +prompt('Enter number');
// let c = +prompt('Enter your number');
// if (a > b && a > c) {
//  if(b>c){
//  console.log(a, b, c);
// } else {
//   console.log(a, c, b);
//  }
// }
// else if (b > a && b > c){
//  if (a > c){
//   console.log(b, a, c);
//  } else {
//   console.log(b, c, a);
//  }
// } else if (c > a && c > b){
//  if(a>b){
//   console.log(c, a, b);
//  } else {
//   console.log(c, b, a);
//  }
// }
//
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let colour = prompt('Colour is:');
// if ( colour === 'green'){
//  alert('go');
// } else if (colour === 'yellow'){
// alert('wait');
// } else if (colour === 'red'){
//  alert('stop');
// } else if (colour === 'accident'){
//  alert('Do what you want');
// }

// let colour = prompt('Enter colour');
// switch (colour) {
//     case 'green':
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     case 'accident':
//         console.log('do what you want');
//         break;
//     default:;
//     break;
// }


//
//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let colour = prompt('Enter colour');
// let isRoadClear = prompt('Enter yes or no');
// if (colour==='green' && isRoadClear === 'no'){
//     alert('go');
// } else if(colour==='green' && isRoadClear === 'yes'){
//     alert('wait till the will have gone');
// }
// else if (colour==='yellow' && isRoadClear === 'no'){
//     alert('wait till the cars will have gone');
// } else if(colour==='yellow' && isRoadClear === 'yes'){
//     alert('wait anyway');
// } else if (colour==='red' && isRoadClear === 'no'){
//     alert('stay anyway');
// } else if(colour==='red' && isRoadClear === 'yes'){
//     alert('stay and wait');
// } else if (colour==='accident'){
//     alert('do what you want');
// }


