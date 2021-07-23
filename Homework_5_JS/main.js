// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

console.log(document.getElementById('content').innerText);
// -- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules').innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
const idContent = document.getElementById('content');
idContent.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam asperiores'
// -- замініть текст параграфа з id 'rules' на будь-який інший
const idRules = document.getElementById('rules');
idRules.innerText = 'Cool bool fool';
// -- змініть кожному елементу колір фону на червоний
idContent.style.background = 'red';
idRules.style.backgroundColor = 'red';
const elByTag = document.getElementsByTagName('li');
for (const elByTagElement of elByTag) {
    elByTagElement.style.backgroundColor = 'silver';
    elByTagElement.style.color = 'blue';

}
// -- змініть кожному елементу колір тексту на синій
idContent.style.color = 'blue';
idRules.style.color = 'darkblue'
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(idRules.classList);
console.log(document.getElementById('rules').classList);
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let elFcRules = document.getElementsByClassName('fc_rules');
console.log(elFcRules);
for (const list of elFcRules) {
       list.onclick = function () {
        console.log(this.innerText);
        console.log('Boom');
    }
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const ellement of elFcRules) {
    ellement.style.color = 'red'
}