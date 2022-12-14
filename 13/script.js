// Рисуем колоду карт, которая состоит из:
// карт номиналом 2-10 всех мастей
// карт jack, queen, king всех мастей
// карт тузов всех мастей

// В макете используется:
// Шрифт https://fonts.google.com/specimen/Nerko+One
// Зеленый цвет доски #55aa55
// Черный цвет текста #353c4d
// Иконки 4-x мастей и jack, queen, king в архиве images.zip

// Все теги рендерим с помощью js.
// Внешний вид задания НЕ важен, важен только JS-код))


cardSuits = ["clubs", "spades", "diamonds", "hearts"];
numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
cards = [];

//добавляю карты с цифрами
for(i = 0; i < numbers.length; i++) {
    for(k = 0; k < cardSuits.length; k++) {
        cards.push(`
    <div class="cards">
        <div class="card_img">${numbers[i]} <img src="images/suits/${cardSuits[k]}.svg" alt="card number and suit"></div>
       <div class="card_img">${numbers[i]} <img src="images/suits/${cardSuits[k]}.svg" alt="card number and suit"></div>
    </div>`)
    }
}

jaQueKiCards = ["J", "Q", "K"];
jackQueenKing = ["jack", "queen", "king"];

//добавляю карты с вальтом, дамой и королём
for(l = 0; l < jaQueKiCards.length; l++) {
    for(k = 0; k < cardSuits.length; k++) {
        cards.push(`
    <div class="cards">
        <div class="card_img">${jaQueKiCards[l]} <img src="images/suits/${cardSuits[k]}.svg" alt="card person and suit"></div>
        <img class="jack_queen_king" src="images/images/${jackQueenKing[l]}.svg" alt="card person and suit">
       <div class="card_img">${jaQueKiCards[l]} <img src="images/suits/${cardSuits[k]}.svg" alt="card person and suit"></div>
    </div>`)
    }
}

//добвляю карты с тузами
for(k = 0; k < cardSuits.length; k++) {
    cards.push(`
    <div class="cards">
        <div class="card_img">
            <p class="text">T</p>
                <img src="images/suits/${cardSuits[k]}.svg" alt="card ace and suit">
        </div>
        <img class="jack_queen_king" src="images/suits/${cardSuits[k]}.svg" alt="card ace and suit">
       <div class="card_img">
            <p class="text">T</p>
                <img src="images/suits/${cardSuits[k]}.svg" alt="card ace and suit">
        </div>
    </div>`)
}
document.write(`<div class="cards_field">${cards.join("")}</div>`);