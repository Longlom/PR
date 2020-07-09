
'use strict'

const divArr = document.body.querySelectorAll('.back');

document.body.querySelector('.input__range').addEventListener('input', function (event) {
    switch (this.value) {
        case '0' :
            for (let i = 0; i < divArr.length; i++){
                divArr[i].style.background = 'linear-gradient(45deg, #22AB93, #19668D)';
            }
            break;
        case '1':
            for (let i = 0; i < divArr.length; i++){
                divArr[i].style.background = 'linear-gradient(90deg, #22AB93, #19668D)';
            }
            break;
        case '2':
            for (let i = 0; i < divArr.length; i++){
                divArr[i].style.background = 'linear-gradient(135deg, #22AB93, #19668D)';
            }
            break;
        case '3':
            for (let i = 0; i < divArr.length; i++){
                divArr[i].style.background = 'linear-gradient(180deg, #22AB93, #19668D)';
            }
            break;
        case '4':
            for (let i = 0; i < divArr.length; i++){
                divArr[i].style.background = 'linear-gradient(225deg, #22AB93, #19668D)';
            }
            break;
        case '5':
            for (let i = 0; i < divArr.length; i++){
                divArr[i].style.background = 'linear-gradient(270deg, #22AB93, #19668D)';
            }
            break;
        case '6':
            for (let i = 0; i < divArr.length; i++){
                divArr[i].style.background = 'linear-gradient(315deg, #22AB93, #19668D)';
            }
            break;
        case '7':
            for (let i = 0; i < divArr.length; i++){
                divArr[i].style.background = 'linear-gradient(360deg, #22AB93, #19668D)';
            }
            break;
    }
});