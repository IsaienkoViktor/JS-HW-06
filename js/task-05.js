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
    if (event.currentTarget.value !== "") {
        ref.outputText.textContent = event.currentTarget.value
    }
    else {
        ref.outputText.textContent = 'Anonymous'
    }

    //теж працює 
    // event.currentTarget.value !== "" ? ref.outputText.textContent = event.currentTarget.value : ref.outputText.textContent = "Anonymous";
    } 
    



ref.inputText.addEventListener('input', inputValue)



