'use strict';

function testScope() {
    var x_var = 'Variable with var';
    let x_let = 'Variable with let';
    const x_const = 'Variable with const';

    {
        var innerVar = 'Inner variable with var';
        let innerLet = 'Inner variable with let';
        const innerConst = 'Inner variable with const';
        console.log(innerVar); // Выведет 'Inner variable with var'
        console.log(innerLet); // Выведет 'Inner variable with let'
        console.log(innerConst); // Выведет 'Inner variable with const'
    }

    // Попытка доступа к переменным внутри блока извне
    // console.log(innerVar); // Ошибка: innerVar is not defined
    // console.log(innerLet); // Ошибка: innerLet is not defined
    // console.log(innerConst); // Ошибка: innerConst is not defined

    console.log(x_var); // Выведет 'Variable with var'
    // console.log(x_let); // Ошибка: Cannot access 'x_let' before initialization
    // console.log(x_const); // Ошибка: Cannot access 'x_const' before initialization
}

testScope();

// Попытка доступа к переменным извне блока
// console.log(x_var); // Ошибка: x_var is not defined
// console.log(x_let); // Ошибка: x_let is not defined
// console.log(x_const); // Ошибка: x_const is not defined
// console.log(innerVar); // Ошибка: innerVar is not defined
// console.log(innerLet); // Ошибка: innerLet is not defined
// console.log(innerConst); // Ошибка: innerConst is not defined
