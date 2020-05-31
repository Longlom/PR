'use strict'

function Memoji() {
    this.playground = document.body.querySelector('.playground');
    this.img = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻','🐶', '🐱', '🐭', '🐹', '🐰', '🐻'];
}

Memoji.prototype.start = function(){
    for (let i = 0; i<12; i++){
        let div = document.createElement('div');
        let rand = Math.floor(Math.random() * this.img.length);
        div.classList.add('card');
        div.innerHTML = `<div class="side front">${this.img[rand]}</div><div class="side back"></div>`;
        this.playground.append(div);

        this.img.splice(rand,1);
    }

};


let myGame = new Memoji();
myGame.start();

myGame.playground.addEventListener('click', function (event) {
    let target = event.target;
    if (!target.classList.contains('card')){
        return;
    }
    target.classList.toggle('rotate');
    return;

});

// window.addEventListener('load', function (event) {
//     alert('Game is Ready');
// });

myGame.playground.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('card')){
        alert("Don't click twice");
    }
    return;
});

myGame.playground.addEventListener('contextmenu', function (event) {
    if (event.target.classList.contains('card')){
        alert("Context menu aren't allowed");
    }
    event.preventDefault();
});


// window.onbeforeunload = function (e) {
//     var dialogText = 'Dialog text here';
//     e.returnValue = dialogText;
//     return dialogText;
// };

