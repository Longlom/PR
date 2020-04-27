(function () {
    'use strict'
    document.body.querySelector('form').addEventListener('submit',function (event) {
        let $new_div;
        const data = document.body.querySelector('.inp').value;
        $new_div = $('<div class="user_style"><img src="user.png"><div class="user_ans"></div></div>')
        $new_div.addClass('user_style');
        $new_div.attr('lang','ru');
        $new_div.hide();
        $('.chat_block_container').prepend($new_div);
        document.body.querySelector('.user_ans').innerHTML =`${data}`;
        $new_div.slideDown();
        $(".inp").val("");
        let $bot_ans;
        if (data === '/start') {
            document.body.querySelector('form').dataset.showInfo = 'checked';
            $bot_ans = $('<div class="bot_style"><img src="bot.png"><div class="bot_ans">Привет, меня зовут Чат-бот, а как зовут тебя?</div></div>');
            $bot_ans.hide();
            $('.chat_block_container').prepend($bot_ans);
            $bot_ans.slideDown();
        }
        else if( document.body.querySelector('form').dataset.showInfo === 'checked') {
            if (data ==='/name: Alex') {
                $bot_ans = $('<div class="bot_style"><img src="bot.png"><div class="bot_ans">Привет Alex, приятно познакомиться. Я умею считать, введи числа которые надо посчитать</div></div>');
                $bot_ans.hide();
                $('.chat_block_container').prepend($bot_ans);
                $bot_ans.slideDown();
            } else if (data.startsWith('/number')) {
                let nums = [];
                nums = data.match(/\d+/g);
                if (nums.length === 2) {
                    document.body.querySelector('form').dataset.numsShow = `${nums[0]}` + `,${nums[1]}`;
                    document.body.querySelector('form').dataset.numsFlag = 'true'
                    $bot_ans = $('<div class="bot_style"><img src="bot.png"><div class="bot_ans">-, +, *, / ?</div></div>');
                    $bot_ans.hide();
                    $('.chat_block_container').prepend($bot_ans);
                    $bot_ans.slideDown();
                } else{
                    $bot_ans = $('<div class="bot_style"><img src="bot.png"><div class="bot_ans">Вы ввели больше чем 2 числа</div></div>');
                    $bot_ans.hide();
                    $('.chat_block_container').prepend($bot_ans);
                    $bot_ans.slideDown();
                }
            } else if ((data === '+' || data === '-' || data === '*' || data === '/') &&(document.body.querySelector('form').dataset.numsFlag === 'true')) {
                if (document.body.querySelector('form').dataset.numsShow !== undefined) {
                    let nums = document.body.querySelector('form').dataset.numsShow;
                    nums = nums.match(/\d+/g);
                    console.log(nums);
                    let result;
                    switch (data) {
                        case '+':
                            result = +nums[0] + +nums[1];
                            break;
                        case '-':
                            result = nums[0] - nums[1];
                            break;
                        case '*':
                            result = nums[0] * nums[1];
                            break;
                        case '/':
                            result = nums[0] / nums[1];

                            break;
                    }
                    $bot_ans = $('<div class="bot_style"><img src="bot.png"><div class="bot_ans"></div></div>');
                    $bot_ans.hide();
                    $('.chat_block_container').prepend($bot_ans);
                    document.body.querySelector('.bot_ans').innerHTML = `${result}`;
                    $bot_ans.slideDown();
                } else {
                    $bot_ans = $('<div class="bot_style"><img src="bot.png"><div class="bot_ans">Вы не ввели числа</div></div>');
                    $bot_ans.hide();
                    $('.chat_block_container').prepend($bot_ans);
                    $bot_ans.slideDown();
                }

            } else if (data === '/stop') {
                document.body.querySelector('form').dataset.showInfo = 'none';
                $bot_ans = $('<div class="bot_style"><img src="bot.png"><div class="bot_ans">Всего доброго, если хочешь поговорить пиши /start</div></div>');
                $bot_ans.hide();
                $('.chat_block_container').prepend($bot_ans);
                $bot_ans.slideDown();
            } else{
                $bot_ans = $('<div class="bot_style"><img src="bot.png"><div class="bot_ans">Я не понимаю, введите другую команду!</div></div>');
                $bot_ans.hide();
                $('.chat_block_container').prepend($bot_ans);
                $bot_ans.slideDown();
            }
        }else if(data ==='/weather'){
            $('<div class="bot_style"><img src="bot.png"><div class="bot_weather"><a href="https://clck.yandex.ru/redir/dtype=stred/pid=7/cid=1228/*https://yandex.ru/pogoda/213" target="_blank"><img src="https://info.weather.yandex.net/213/2_white.ru.png?domain=ru" border="0" alt="Яндекс.Погода"/></a></div></div>').prependTo('.chat_block_container').show('slow');
        }

        else{
            $bot_ans = $('<div class="bot_style"><img src="bot.png"><div class="bot_ans">Я не понимаю, введите другую команду!</div></div>');
            $bot_ans.hide();
            $('.chat_block_container').prepend($bot_ans);
            $bot_ans.slideDown();
        }


        event.preventDefault();
        return 0;
    });
    document.body.querySelector('.inp').addEventListener('keyup',function (event) {
        let x= document.body.querySelector('.chat_block_container').getBoundingClientRect().left;
        let y = document.body.querySelector('.chat_block_container').getBoundingClientRect().top  + document.body.querySelector('.chat_block_container').getBoundingClientRect().height;
        const dots = document.body.querySelector('.animation');
        if(document.body.clientWidth>425) {
            dots.style.left = `${x + 25}px`;
            dots.style.top = `${y - 10}px`;
        }else {
            dots.style.left = `${x + 15}px`;
            dots.style.top = `${y-5}px`;
        }
        const btn = document.body.querySelector('.btn');
        const data = document.body.querySelector('.inp').value;
        let i = document.getElementsByTagName('i');
        if (data !== '') {
            btn.removeAttribute('disabled');
            document.body.querySelector('.btn img').src = 'SendOn.png'
            for (let key of i){
                key.classList.add('i');
            }

        }
        else if(data ===''){
            btn.setAttribute('disabled', 'true');
            document.body.querySelector('.btn img').src = 'SendOff.png'
            for (let key of i){
                key.classList.remove('i');
            }
        }
    });
})();
