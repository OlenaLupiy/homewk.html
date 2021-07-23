// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const clients = [
//     new Client(5, 'Napoleon', 'Peterson', 'pop@gmail.com', 569874, ['bread', 'milk', 'kiwi']),
//     new Client(12, 'Bob', 'Bobenko', 'po56@gmail.com', 2365897987, ['bread', 'milk', 'kiwi', 'bob']),
//     new Client(31, 'Sam', 'Semenyuk', 'gi65@gmail.com', 58974563, ['bread', 'milk', 'kiwi']),
//     new Client(44, 'Olya', 'Vacyk', 'lo25@gmail.com', 256987465, ['bread', 'milk', 'kiwi']),
//     new Client(15, 'Halya', 'Bondarenko', 'io25@gmail.com', 256987435, ['bread', 'milk', 'kiwi', 'bob', 'potato']),
//     new Client(6, 'Kate', 'Polap', 'lo23@gmail.com', 978598745, ['bread', 'milk', 'kiwi', 'lemon', 'bob', 'potato']),
//     new Client(71, 'Tom', 'Bobenko', 'po56@gmail.com', 2365897987, ['bread']),
//     new Client(8, 'Nil', 'Semenyuk', 'gi65@gmail.com', 58974563, ['bread', 'milk']),
//     new Client(19, 'Socrat', 'Vacyk', 'lo25@gmail.com', 256987465, ['bread', 'milk', 'kiwi', 'bob', 'lemon', 'plum', 'cucumber', 'cheese']),
//     new Client(108, 'Eshly', 'Bondarenko', 'io25@gmail.com', 256987435, ['bread', 'milk', 'kiwi', 'bob'])
// ]
//  const sortOrder = clients.sort(function (a, b) {
//     return a.order.length - b.order.length
//
// })
// console.log(sortOrder);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car (model, produce, year, speed, volume){
//     this.model = model;
//     this.produce = produce;
//     this.year = year;
//     this.speed = speed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`Drive with ${speed}/hour`)
//     };
//     this.info = function () {
//         console.log(`This ${this.model} produce ${this.produce} in ${year} drive with ${speed}/hour and has volume of engine ${volume}`)
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed+=newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDrive = function (driver) {
//             this.driver = driver;
//     }
// }
// let driver = {
//     name: 'Victor',
//     age: 18,
// }
// let car1 = new Car('kupe', 'lexus', 2019, 240, 3.5)
// console.log(car1)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(25);
// car1.changeYear(2020);
// car1.addDrive(driver);
// console.log(car1);
// const arrayCars = [
//     new Car('kupe', 'lexus', 2019, 240, 3.5),
//     new Car('sedan', 'volvo', 2017, 180, 2.2),
//     new Car('crossover', 'bmv', 2016, 190, 3.1),
// ]
// console.log(arrayCars);
// arrayCars[0].info();
// arrayCars[1].changeYear(1990);
// arrayCars[2].addDrive(driver)

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- this.model = model;
//     this.produce = produce;
//     this.year = year;
//     this.speed = speed;
//     this.volume = volume; (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//

// class Cars {
//     constructor(model, produce, year, speed, volume) {
//         this.model = model;
//         this.produce = produce;
//         this.year = year;
//         this.speed = speed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`Drive with ${this.speed}`)
//     }
//
//     info() {
//         console.log(`${this.model} produce by ${this.produce} in ${this.year} drive with speed ${this.speed}/hour`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.speed +=newSpeed;
//     };
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
//     let carNew1 = new Cars('kupe', 'lexus', 2019, 240, 3.5);
//     let carNew2 = new Cars('sedan', 'volvo', 2017, 180, 2.2);
//     let carNew3 = new Cars('crossover', 'bmv', 2016, 190, 3.1);
//         console.log(carNew1);
//         carNew1.info()
// carNew1.increaseMaxSpeed(100)
// console.log(carNew1)
// let driver = {
//             name: 'Oleg',
//             age: 42,
// }
// console.log(carNew1.addDriver(driver));
//
//

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Popelyushka (name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
// const girls = [
//     new Popelyushka('Olya', 18, 34),
//     new Popelyushka('Tanya', 17, 34),
//     new Popelyushka('Halya', 16, 33),
//     new Popelyushka('Mary', 19, 37),
//     new Popelyushka('Kelly', 22, 40),
//     new Popelyushka('Sasha', 19, 37),
// ]
// class Princ{
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// let princ = new Princ('Orest', 55, 37);
//
//
// const find = girls.find(function (value) {
//     return value.size === 37;
//
// })
// console.log(find);
//
// for (const findElement of girls) {
//     if(findElement.size === 37){
//         console.log(`Princ must be with ${findElement.name}`)
//     }
//
// }

// Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
class Contact {

    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;

        this.address =
            {
                street,
                suite,
                city,
                zipcode,
            }
        this.address.geo = {
            lat,
            lng
        }
        this.phone = phone
        this.website = website
        this.company =
            {
                name,
                catchPhrase,
                bs,
            }
    }
}

const bio = new Contact(10, `Nazik`, `hav`, `Lodby@`, `vrubl`, `10`, `Lviv`,
    92998, 37, 22, 7709999999,`Romaguera.com`,`Romaguera`,
    `Multi-layered client-server neural-net`,`harness real-time e-markets`)
console.log(bio)
