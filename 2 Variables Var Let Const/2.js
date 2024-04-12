'use strict';

function testScope() {
    var x_var = 'Variable with var';
    let x_let = 'Variable with let';
    const x_const = 'Variable with const';

    // Попытка объявления переменной с тем же именем
    var x_var = 'Second variable with var'; // Позволяет повторное объявление
    // let x_let = 'Second variable with let'; // Ошибка: Identifier 'x_let' has already been declared
    // const x_const = 'Second variable with const'; // Ошибка: Identifier 'x_const' has already been declared

    console.log(x_var); // Выведет 'Second variable with var'
}

testScope();
