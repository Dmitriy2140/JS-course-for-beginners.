// как избежать мутации объектов в JS

const person = {
    name: 'Bob',
    age: 25
}

//1 вариант использования Object.assign()
const person2 = Object.assign({}, person)

person2.age = 26

console.log(person.age)
25
console.log(person2.age)
26

//2 вариант использования оператоа (...)
const person2 = {...person }

person2.name = 'Alice'

console.log(person2.name)
Alice
console.log(person.name)
Bob

//3 вариант использования JSON, который удаляет ссылки в ложеным объектам
const person2 = JSON.parse(JSON.stringify(person))

person2.name = 'Alice'

console.log(person2.name)
Alice
cosole.log(person.name)
Bob