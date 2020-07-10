module.exports = function () {
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
                description: "Profesjonalne obuwie piłkarskie.", price: 1795000
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
}