window.onload = function () {
    document.querySelector('.card').classList.add(generadorDeSuitRandom());
    document.querySelector('.card').innerHTML = generadorDeNumeroRandom();
}

let generadorDeNumeroRandom = () => {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indiceNombre = Math.floor(Math.random() * numbers.length);
    return numbers[indiceNombre];
}

let generadorDeSuitRandom = () => {
    var suit = ["spade", "hearts", "club", "diamond"];
    let indiceSuit = Math.floor(Math.random() * suit.length)
    return suit[indiceSuit];
}

document.getElementById('new-card-btn').addEventListener('click', function () {
    let card = document.querySelector('.card');
    card.classList.remove("spade", "hearts", "club", "diamond");
    card.classList.add(generadorDeSuitRandom());
    card.innerHTML = generadorDeNumeroRandom();
});
