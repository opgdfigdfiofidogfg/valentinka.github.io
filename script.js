const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

// найдем кнопку "Нет" по идентификатору
const noButton = document.querySelector('no-button');
// повесим обработчик событий
noButton.addEventListener('mouseenter', () => {
    noButton.style.left = `${random(0, 90)}%`;
    noButton.style.top = `${random(0, 90)}%`;
});

// в случае победы выведем:
noButton.addEventListener('click', () => {
    alert('Congrats! You hit the button! What are you doing with your life? :D');
});