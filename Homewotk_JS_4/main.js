// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function randomNumbers(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.trunc(Math.random()*100));
//     }
//     return array;
// }
//
// console.log(randomNumbers(10));

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
// function randomNumbers(x) {
//     let array = [];
//     for (let i = 0; i < x; i++) {
//
//     array.push(Math.trunc(Math.random()*x));
//     }
//    return array;
// }
// console.log(randomNumbers(10));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// function randomNumbers(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.trunc(Math.random()*50));
//     }
//     return array;
//
// }
//
// console.log(randomNumbers(10).sort(function (a, b) {
//     return a-b;
//
// }));

// function randomNumbers(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.trunc(Math.random()*60));
//     }
//     return array
// }
// let someNumbers = randomNumbers(10);
// let sort = someNumbers.sort(function (a, b) {
//     return a-b;
// })
// console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

// function randomNumbers(x) {
//     let array =[];
//     for (let i = 0; i < x; i++) {
//         array.push(Math.trunc(Math.random()*x));
//     }
//     return array;
// }
// const someNumbers = randomNumbers(15);
//  let filter = someNumbers.filter(function (value) {
//     return value % 2 === 0;
// })
// console.log(someNumbers);
// console.log(filter);
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
// let arr = [23, 45, 89, 69, 87, 99, 0, 125, 89, 42];
//  const map = arr.map(function (item) {
//     return [item+'']
// })
// console.log(map);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
class User{
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let user1 = new User(1, 'Mike', 'Mihael', 'bo23@gmail.com', 978598745);
let user2 = new User(2, 'Bob', 'Bobenko', 'po56@gmail.com', 2365897987);
let user3 = new User(3, 'Sam', 'Semenyuk', 'gi65@gmail.com', 58974563 );
let user4 = new User(4, 'Olya', 'Vacyk', 'lo25@gmail.com', 256987465);
let user5 = new User(5, 'Halya', 'Bondarenko', 'io25@gmail.com', 256987435);
let user6 = new User(6, 'Kate', 'Polap', 'lo23@gmail.com', 978598745);
let user7 = new User(7, 'Tom', 'Bobenko', 'po56@gmail.com', 2365897987);
let user8 = new User(8, 'Nil', 'Semenyuk', 'gi65@gmail.com', 58974563 );
let user9 = new User(9, 'Socrat','Vacyk', 'lo25@gmail.com', 256987465 );
let user10 = new User(10, 'Eshly', 'Bondarenko', 'io25@gmail.com', 256987435);

const array = [new User(10, 'Mike', 'Mihael', 'bo23@gmail.com', 978598745),
new User(12, 'Bob', 'Bobenko', 'po56@gmail.com', 2365897987),
new User(31, 'Sam', 'Semenyuk', 'gi65@gmail.com', 58974563 ),
new User(44, 'Olya', 'Vacyk', 'lo25@gmail.com', 256987465),
 new User(15, 'Halya', 'Bondarenko', 'io25@gmail.com', 256987435),
 new User(6, 'Kate', 'Polap', 'lo23@gmail.com', 978598745),
 new User(71, 'Tom', 'Bobenko', 'po56@gmail.com', 2365897987),
new User(8, 'Nil', 'Semenyuk', 'gi65@gmail.com', 58974563 ),
 new User(19, 'Socrat','Vacyk', 'lo25@gmail.com', 256987465 ),
 new User(108, 'Eshly', 'Bondarenko', 'io25@gmail.com', 256987435)
];

console.log(array);
// const arrayNew = []
// for (let i=0; i < array.length; i++) {
//     if(array[i].id % 2 === 0){
//         arrayNew.push(array[i]);
//             }
//     }
// console.log(arrayNew);
 let filter = array.filter(function (user){
    return user.id % 2 === 0;
})
console.log(filter);


const sort = array.sort(function (a, b){
return a.id-b.id;
})
console.log(sort)

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
