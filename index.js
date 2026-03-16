//Js inserAdjacentHTML() methods...
// It has four values which is--> 'Beforebeing', 'afterbeing', 'beforend', 'afterend'....

let list = document.querySelector("#container");
list.insertAdjacentHTML('beforebegin', '<h2>This is beforebeing method</h2>');
list.insertAdjacentHTML('afterbegin', '<li>This is after being method</li>');
list.insertAdjacentHTML('beforeend', '<li>This is beforend method</li>');
list.insertAdjacentHTML('afterend', '<p>This is afterend method</p>');

//Js removechild() method...

let nav = document.querySelector("#container");
nav.removeChild(nav.lastElementChild);