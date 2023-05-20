// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const container = document.querySelector('#counter')
const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const counter = document.querySelector('#value')

let counterValue = 0;  

const increaseValueOnClick = () => {
    counterValue += 1 
    counter.textContent = counterValue
}
const decreaseValueOnClick = () => {
    counterValue -= 1
    counter.textContent = counterValue
}


decrement.addEventListener('click', decreaseValueOnClick);
increment.addEventListener('click', increaseValueOnClick);




// console.log(counter);
// console.log(decrement);
// console.log(increment);