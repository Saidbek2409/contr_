let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = []

let min = []

let average = 0

let arr = [

{

name: 'Milk',

price: 3.25,
isfresh:true

},

{

name: 'Coffee',

price: 1.5,
isfresh:true

},

{

name: 'Ice Cream',

price: 7.85,
isfresh:false

},

{

name: 'Tomatos',

price: 4.14,
isfresh:true

},

{

name: 'Onion',

price: 2.25,
isfresh:false
}

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max и самый дешевый в min`*

// 2. отфильтровать масив на свежие и не свежие продукты

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции setup()*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
for(let item of arr){
    // 1 \\

if(item.price > 4.15){
max.push(item)
} else(min.push(item))
// 2\\
fresh = arr.filter(item => item.isfresh == true)
nefresh = arr.filter(item => item.isfresh == false)

// 3\\

total += item.price

console.log(total)
// 4 \\
totalSale = total / 100 * discount
console.log(totalSale);
}
}

setup()

let isfresh = []
let isnotfresh = []
console.log(fresh,nefresh);

console.log(total);
console.log(max,min);