var faker = require("faker");
faker.seed(100);
var categories = ["Sporty wodne", "Piłka nożna", "Wspinaczka"];
var products = [];
for (let i = 1; i <= 503; i++) {
    var category = faker.helpers.randomize(categories);
    products.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    })
}

var orders = [];
for (let i = 1; i <= 103; i++) {
    var fname = faker.name.firstName(); var sname = faker.name.lastName();
    var order = {
        id: i, name: `${fname} ${sname}`,
        email: faker.internet.email(fname, sname),
        address: faker.address.streetAddress(), city: faker.address.city(),
        zip: faker.address.zipCode(), country: faker.address.country(),
        shipped: faker.random.boolean(), products: []
    }
    var productCount = faker.random.number({ min: 1, max: 5 });
    var product_ids = [];
    while (product_ids.length < productCount) {
        var candidateId = faker.random.number({ min: 1, max: products.length });
        if (product_ids.indexOf(candidateId) === -1) {
            product_ids.push(candidateId);
        }
    }
    for (let j = 0; j < productCount; j++) {
        order.products.push({
            quantity: faker.random.number({min: 1, max: 10}),
            product_id: product_ids[j]
        })
    }
    orders.push(order);
}




module.exports = () => ({categories, products, orders})







/* module.exports = function () {
    return {
        categories: ["Sporty wodne", "Piłka nożna", "Wspinaczka"],
        products: [
            {
                id: 1, name: "Kajak", category: "Sporty wodne",
                description: "Jednoosobowa łódka.", price: 990
            },
            {
                id: 2, name: "Kamizelka ratunkowa.", category: "Sporty wodne",
                description: "Pewna, bezpieczna i modna.", price: 79.95
            },
            {
                id: 3, name: "Piłka nożna", category: "Piłka nożna",
                description: "Rozmiar i waga zatwierdzona przez FIFA.", price: 220.50
            },
            {
                id: 4, name: "Flagi do narożników boiska", category: "Piłka nożna",
                description: "Nadadzą twemu boisku profesjonalny wygląd.",
                price: 450.99
            },
            {
                id: 5, name: "Korki", category: "Piłka nożna",
                description: "Profesjonalne obuwie piłkarskie.", price: 179
            },
            {
                id: 6, name: "Kask", category: "Wspinaczka",
                description: "Posiada wszechstronne zastosowanie i jest wykonany z solidnych materiałów.", price: 129
            },
            {
                id: 7, name: "Ekspresy", category: "Wspinaczka",
                description: "Zestaw 5 ekspresów dedykowany wspinaczce sportowej",
                price: 379
            },
            {
                id: 8, name: "Uprząż", category: "Wspinaczka",
                description: "Fantastyczna propozycja dla wszystkich wspinaczy chcących maksymalnie ograniczyć wagę dźwiganego szpeju.", price: 230
            },
            {
                id: 9, name: "Karabinki typu: Oval", category: "Wspinaczka",
                description: "Zestaw 20 karabinków, które dzięki swojemu owalnemu kształtowi i ogromnej wytrzymałości idealnie nadadzą się do użytku w połączeniach linowych.", price: 399
            }
        ],
        orders: []
    }
} */