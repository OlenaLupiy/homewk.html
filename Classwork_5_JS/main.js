// Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

document.getElementById('main_header').innerText = 'June-2021'
// b) робить шириниу елементу ul 400px
const elemUl = document.getElementsByTagName('ul');
for (const list of elemUl) {
    list.style.width = '400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
const linkList = document.getElementsByClassName('linkList');
for (const list of linkList) {
    console.log(list);
    list.style.width = '50%';
    list.style.color = 'yellow'
}
// d) отримує текст який зберігається в елементі з класом listElement2
 const listElement2 = document.getElementsByClassName('listElement2');
for (const list of listElement2) {
    console.log(list.innerText);
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
const li = document.getElementsByTagName('li');
for (const list of li) {
    list.style.background = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
// const a = document.getElementsByTagName('a');
// for (const list of a) {
//     list.classList.add('anchor')
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
const a = document.getElementsByTagName('a');
for (const list of a) {
   if (list.innerText === 'link3'){
       list.style.fontSize = '40px';
   }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const list of a) {
    list.classList.add(`element_${list.innerText}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt('Enter your color', '');
// let subHeader = document.getElementsByClassName('sub-header');
// for (const list of subHeader) {
//     console.log(list);
//     list.style = `background: ${color}`
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let color = prompt('Enter your color', '');
let sub = document.getElementsByClassName('sub-header');
for (const list of sub) {
    console.log(list);
    list.innerText===`content 2 segment` ? list.style = `background: ${color}` : '';
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = prompt('Enter your text', '');
// let content = document.getElementsByClassName('content_1');
// for (const list of content) {
//     list.innerText = text
// }
document.getElementsByClassName('content_1')[0].innerText = prompt('Text')
// l) отримати елементи p та змінити їм padding на 20px
 const tagP = document.getElementsByTagName('p');
for (const list of tagP) {
    list.style = 'padding: 20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let text2 = document.getElementsByClassName('text2');
for (const list of text2) {
    list.innerText = 'June-2021'
}