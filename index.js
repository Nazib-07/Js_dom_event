let parent = document.querySelector('#parent');
let form = document.querySelector('#form');
let button = document.querySelector('#btn');


/// at first remove the comment...
// button.addEventListener('click', listen);
// form.addEventListener('click', listen);
// parent.addEventListener('click', listen);

//Js Bubbling...
//Here atfirst come child element then parent element..
// function listen (enent) {
//     console.log(event.currentTarget);
//}

// function listen (event){
//     console.log(this.tagName);
// }

//Js Capturing...
//It just reverse the tag name. parent parent come first then child...

// button.addEventListener('click', listen, {
//     capture: true,
// });
// form.addEventListener('click', listen, {
//     capture: true,
// });
// parent.addEventListener('click', listen, {
//     capture: true,
// });

// function listen (){
//     console.log(this.tagName);
// }

