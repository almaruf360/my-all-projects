console.log('append.js');
// 1.where to add.
const placesList =document.getElementById('places-list');
// 2.what to be added.
const li = document.createElement('li');
li.innerText = 'katabon';
console.log(li)
// 3.add the child.
placesList.appendChild(li)

// parent adding

// 1.where to add.

const mainContainer = document.getElementById('main-container');
// what to be added.
const section =document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText='my food list';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li'); 
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li'); 
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li'); 
li3.innerText = 'salad';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set inner html directly

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
<h1> my dress collection </>
<ul>
<li> panjabi<li/>
<li> pajama <li/>
<li> lungi <li/>
<li> shirt <li/>
<li> pant <li/>

<ul/>

`
section.appendChild(sectionDress);