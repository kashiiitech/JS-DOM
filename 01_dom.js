// EXAMINE THE DOCUMENT OBJECT

console.dir(document);

console.log(document.domain); // it will give the domain of the website
console.log(document.URL); // it will give the entire URL of the website
console.log(document.title);
document.title = 123;   //   we can change the title of our website
console.log(document.doctype); // which type of the document using : HTML-->IN THIS CASE
console.log(document.head);
console.log(document.body); // grab the body for us
console.log(document.all);// it gives us an array of an html collection of everything that is in DOM
console.log(document.all[10]);
document.all[10].textContent='Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.forms);
console.log(document.images);


// SELECTORS

// GET ELEMENT BY ID //

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';
header.style.borderBottom = 'solid 3px #000';


// GETTING ELEMENTS BY CLASS NAME //

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontweight = 'bold';
items[1].style.backgroundColor = 'yellow';


// // Gives error
items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';

}

// GET ELEMENTS BY TAG NAME\\


var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello 2';
li[1].style.fontweight = 'bold';
li[1].style.backgroundColor = 'yellow';


// // Gives error
items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';

}


// // // // // // // // // // // // // // // // // // // // // // // //
// QUERYSELECTOR // IT'S IMPORTANT ONE

var header = document.querySelector('#main-header');
// var header = $('');  // JQuerry
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value='hello world';

var submit = document.querySelector('input[type="submit"]');

submit.value  = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';


//  QUERYSELECTORALL //

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');


for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';

}

for(var i = 0; i < even.length; i++){
    even[i].style.backgroundColor = '#ccc';

}
