"use strict";
let username;
let password;
username = prompt( 'Кто там?', '' );
if(username == 'Админ') {
    password = prompt( 'Пароль?' );
} if( password == 'Я Главный') {
    alert( 'Здравствуйте!' );
} else if( password) {
    alert( 'Неверный пароль' );
} else if(password === null || password === '') {
    alert( 'Отменено' );
} else if ( username ) {
    alert( 'Я Вас не знаю' );
} else if ( username === null || username === '') {
    alert( 'Отменено' );
}


