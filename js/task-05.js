// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const ref = {
    inputText: document.querySelector('#name-input'),
    outputText: document.querySelector('#name-output')
}

const inputValue = (event) => {    
    event.currentTarget.value !== "" ? ref.outputText.textContent = event.currentTarget.value : ref.outputText.textContent = "Anonymous";
    } 
    



ref.inputText.addEventListener('input', inputValue)




// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });