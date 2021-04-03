// Write your code here!

//JS code that removes DOM node 'main#main':

//Make sure you remove the <main> with id 'main': 
//expected <main id="main"></main> to not exist
//remove element id main.

const main = document.getElementById('main');
main.remove();

//create h1 with id victory
//create a newHeader variable that points to my new h1 node
//try this first document.body.appendChild(element);

/* ex) const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);*/

const h1 = document.createElement('h1');
h1.setAttribute('id', 'victory');
h1.innerHTML = 'Keith Funk is the champion';
document.body.appendChild(h1);
console.log(h1);
//the node is created!
const newHeader = document.getElementById('victory');
//do a little dance!





