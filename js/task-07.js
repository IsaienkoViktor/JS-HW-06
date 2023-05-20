// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.



// 1.Знаходимо інпут 

const inputValue = document.querySelector('#font-size-control');

const spanText = document.querySelector('#text');
    
// console.log(spanText);

const inputValueSize = (el) => {
    spanText.style.fontSize = `${el.currentTarget.value}px`;
};


inputValue.addEventListener('input', inputValueSize);


// const textEl = document.querySelector("#text");
// const inputEl = document.querySelector("#font-size-control");
// const changeFontSize = (e) => {
//   textEl.style.fontSize = `${e.currentTarget.value}px`;
// };

// inputEl.addEventListener("input", changeFontSize);