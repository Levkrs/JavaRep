// 2. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:


function intOut(){
	for (let count = 0; count <=100; count++) {
		if 	(count == 0){
			console.log("Число 0");
		}
		else {
			if ( (count % 2) == 0){
				console.log("Четное число - " + count);
			}

			else {
				console.log("Нечетное число - " + count);
			}
		}
		
	}
}

//intOut();

// 3. Выведите в консоль значения, указанные рядом с комментариями:

const post = {
	author: "John", //вывести этот текст postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex", text: "lorem ipsum", 
			rating: {
				likes: 10,
            	dislikes: 2 //вывести это число
        	}

    	}, 
    	{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст 
			rating: {
				likes: 3,
				dislikes: 1 }
		}, 
		]
	}

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text)

//4. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%

const products = [ {
	id: 3,
	price: 200,
},
{
	id: 4,
	price: 900,
},
{
	id: 1,
	price: 1000,
},
];

products.forEach(function(item, i, products){
	item.price = item.price + (item.price * 0.15);
}
);


// Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
//1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0


const products1 = [ 
	{
		id: 3,
		price: 127,
		photos: [
		"1.jpg",
		"2.jpg", ]
	}, 
	{
		id: 5,
		price: 499,
		photos: []
	}, 
	{
		id: 8,
		id: 10,
		price: 26,
		photos: [
		"3.jpg"],
		price: 78,
	}, ];
const result = products1.filter(function(item){
	if (item.photos.length > 0) {
		return item;
	};
	console.log(item.photos.length);
});
console.log(result);

let sortRes = products1.sort(function(a,b){
	let priceA = a.price;
	let priceB = b.price;
	//console.log(priceA);
	//console.log(priceB);
	if (priceA < priceB) {
		return -1;
	}
	if (priceA > priceB) {
		return 1;
	}
	return 0 ;
})

console.log("Отсортированное - ");
console.log(sortRes)



// 1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999], мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
// units: 5, //это единицы tens: 4, //это десятки hundreds: 0, //это сотни
// }

numObj = {
	units : '',
	tens  : '',
	hund : '',
}

function num(x){

	if (Number.isInteger(x)) {
		if (x <= 999 && x >= 0){


			let xstring = x.toString();
			let x1 = xstring.length;
			if (xstring.length == 3) {
				xUnits = xstring[2];
				xTens = xstring[1];
				xHund = xstring[0]; 
				numObj.units = xUnits;
				numObj.tens = xTens;
				numObj.hund = xHund;
				return numObj
			}

			if (xstring.length == 2) {
				xUnits = xstring[1];
				xTens = xstring[0];
				numObj.units = xUnits;
				numObj.tens = xTens;
				numObj.hund = '';
				return numObj
			}
			if (xstring.length == 1) {
				xUnits = xstring[0];
				numObj.units = xUnits;
				numObj.tens = '';
				numObj.hund = '';
				return numObj
			}

		}
		else{
			console.log('Ввели число вне диапазона [0..999]')
		}
	}
	else{
		console.log('Ввели не число')
	}
}

console.log(num(223));
