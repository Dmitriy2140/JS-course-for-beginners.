//Конвертация объекта в JSON

const post = {
    title: 'My post',
    likesQty: 5
}
JSON.stringify(post)

// распарсивание в JS объект
const postStringified = JSON.stringify(post)
JSON.parse(postStringified)
