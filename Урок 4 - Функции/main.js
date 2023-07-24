

// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’

function greeting(name) {
    console.log(`Hello, ${name} !`);
};
greeting('Ranni')

// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел.
//  Функция должна перебирать полученный массив и если число больше 10 - вывести это число в консоль.

const numbers = [5,2,10,12,65,90,]

const check = (numbers) => {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i]);

        }
    }
}
check(numbers);

//  3) Калькулятор

function calc(num1, num2, operator) {
    let result;

    if (operator === 'плюс'){
        result = num1 + num2;
    } else if (operator === 'минус') {
        result = num1 - num2;
    } else if (operator === 'умножить') {
        result = num1 * num2;
    } else if (operator === 'разделить') {
        result = num1 / num2;
    } else {
    console.log('Неверный оператор');
    return;
    }

return result;
}

let result = calc(5, 3, 'умножить');
console.log(result);


