// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


// 1. Знаходимо інпут по айді і створюємо загальну зміну для станів інпуту 

const inputValue = document.querySelector('#validation-input')

console.log(inputValue);

// console.log(valueSet);


// console.log(valueSet);
// console.log(ValueInput);

// 2. Додаємо слухача на інпут, 2 - м параметром передаємо
//  функцію inputValueCheck 
// в якій описуються всі умови




// 3. Створюємо стрілочну функцію для передачі 2 - м параметром в слухач 
// Запихуємо в зміну параметри дата сет і параметр події blur в числовому форматі 
// Ставимо умову при блюр 

const inputValueCheck = (event) => {
    const valueSet = Number(inputValue.dataset.length)
    const valueInput = Number(inputValue.value.length)
   
    if (valueInput === valueSet) {
    inputValue.classList.add('.valid')
    inputValue.classList.remove('.invalid')
    }    
    else if (valueInput < valueSet && valueInput !== 0){
    inputValue.classList.remove('.valid')
    inputValue.classList.add('.invalid')
    }    
    else {
    inputValue.classList.remove('.valid')
    inputValue.classList.remove('.invalid')
    }
    

}

inputValue.addEventListener('blur', inputValueCheck)