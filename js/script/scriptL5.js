let brend = document.getElementsByTagName('span');

for (let auto of brend) {
    console.log(auto.innerText);
}
console.log('--------------------');

let modeli = document.getElementsByClassName('automobil-model');

for (let model of modeli) {
    console.log(model.innerText);
}

console.log('--------------------');

let najbolji = document.getElementById('recenica');
console.log(najbolji.innerText);
console.log('--------------------');

brand = document.querySelectorAll('span');
for (let auto of brand) {
    console.log(auto.innerText);
}
console.log('--------------------');

models = document.querySelectorAll('.automobil-model');
for (let model of models) {
    console.log(model.innerText);
}
console.log('--------------------');

let sentence = document.querySelector('#recenica');
console.log(sentence.innerText);

sentence.innerText = 'test'

console.log(sentence.innerText);
sentence.remove();

let new_el = document.createElement('div');
new_el.classList = 'new-element';
let body = document.querySelector('body')
body.append(new_el);
new_el.innerHTML = '<hr>' + 'test';

console.log(new_el);
