// 1 -

"use strict"
	let tempС = prompt("Введите температуру в градусах цельсия - ");
	let tempF = (9/5)*tempС + 32;
	alert(`Температура по фаренгейту равна ${tempF}`);
	console.log(tempF);

// 2 - 

let admin = null;
let name = 'Василий';
admin = name;
console.log(admin)

// 3 
x1 = 10 + 10 + "10"
console.log(`${x1} получается так как последняя десятка обозначена как строка`)
x2 = 10 +"10" + 10 
console.log(`${x2} так как интерпритатор увидел строковую десятку в середине и преобразовал все int элементы в строковые `)
x3 = 10 + 10 + +"10"
console.log(`${x3} из за + двух плюсов впереди интерпритатор преобразовад строковую 10 в целое число и сложил их`)
x4 = 10 / -""
console.log(`${x4} бесконечность, так как в ковычках не определено число`)
x5 = 10 / +"2,5"
console.log(`${x5} делить на строку нельзя `)


//4

let mode = "normal"; // Корректно
let my_valu3 = 102; // Корректно
let 3my_value3 = "102"; // Некорректно
let __hello__ = "world"; // Корректно
let $$$ = "money"; // Корректно
let !0_world = true; // Некорректно


