// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - У переменной а изначально значение 1 и сделали инкремент на 1 
// d = b++; alert(d);           // 1 - Изначально присвоили b = 1, а только потом увеличии ее на 1, в итоге получили 1
// c = (2+ ++a); alert(c);      // 5 - У меня как я не пытался не получился ответ 5, а получилось только 4
// d = (2+ b++); alert(d);      // 4 - Прибавляем b после инкримента
// alert(a);                    // 3 - 2 раза сделали инкремент а
// alert(b);                    // 3 - 2 раза сделали инкремент б

// var a = 2;
// var x = 1 + (a *= 2);   		// 5 



// 3
// let a = 4;
// let b = 5;

// if (a > 0 && b > 0) {
// 	let c = b - a;
// 	alert(c);
// 	break;
// }
// if (a < 0 && b < 0) {
// 	let c = a * b;
// 	alert(c);
// 	break;
// }

// if (a > 0 && b < 0 || a < 0 && b > 0){
// 	let c = a + b;
// 	alert(c)
// 	break;
//}

// ### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 
// let x = Number(prompt("Введите число от 0 дло 15"));
// let y = null;
// switch(x){
// 	case 0:
// 	y = 0;
// 	while( y <= 15){
// 		console.log(y);
// 		y++;
// 	}
// 	break;
// 	case 1:
// 	y = 1;
// 	while( y <= 15){
// 		console.log(y);
// 		y++;
// 	}
// 	break;
// }


// ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор 
//return. 
// function Summ (x,y){
// 	summa = x + y
// 	return summa
// }

// function Raznost(x,y){
// 	rz = x - y
// 	return rz
// }

// function Div (x,y){
// 	divres = x / y
// 	return divres
// }

// function Mul (x,y) {
// 	mulres = x * y
// 	return mulres
// }

// x = Number(prompt('Введите число x '))
// y = Number(prompt('Введите число y '))

// console.log('Сумма ',Summ(x,y))
// console.log('Разность ',Raznost(x,y))
// console.log('Деление ',Div(x,y))
// console.log('Умножение  ',Mul(x,y))

// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 

function Summ (x,y){
	summa = x + y;
	return summa;
}

function Raznost(x,y){
	rz = x - y;
	return rz;
}

function Div (x,y){
	divres = x / y;
	return divres;
}

function Mul (x,y) {
	mulres = x * y;
	return mulres;
}

x = Number(prompt('Введите число x '));
y = Number(prompt('Введите число y '));
act = prompt('введите операцию (Сложение, Разность, Умножение, Деление)')

// console.log('Сумма ',Summ(x,y))
// console.log('Разность ',Raznost(x,y))
// console.log('Деление ',Div(x,y))
// console.log('Умножение  ',Mul(x,y))
MathOper(x,y,act)

function MathOper (x,y,act) {
	switch(act){
	case 'Сложение':
	console.log('Сумма ',Summ(x,y))
	break;
	case 'Разность':
	console.log('Разность ',Raznost(x,y))
	break;
	case 'Умножение':
	console.log('Умножение ',Mul(x,y))
	break;
	case 'Деление':
	console.log('Деление ',Div(x,y))
	break;
	}
	
}


