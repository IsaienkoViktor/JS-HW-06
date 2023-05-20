// 1. Знаходимо інпут по айді і створюємо загальну зміну для станів інпуту




// 2. Додаємо слухача на інпут, 2 - м параметром передаємо
//  функцію inputValueCheck
// в якій описуються всі умови

// // 3. Створюємо стрілочну функцію для передачі 2 - м параметром в слухач
// // Запихуємо в зміну параметри дата сет і параметр події blur в числовому форматі
// // Ставимо умову при блюр
// // const valueInput = Number(inputValue.value.length)
// 6 -- data-length="6"
//    else if (valueInput < valueSet && valueInput !== 0){
//         inputValue.classList.remove('valid');
//         inputValue.classList.add('invalid');

    

const inputValue = document.querySelector('#validation-input')

const valueSet = Number(inputValue.dataset.length)   

const inputValueCheck = () => {
           
    if (inputValue.value.length === valueSet) {
        inputValue.classList.add('valid');
        inputValue.classList.remove('invalid');
    }        

    else {
        inputValue.classList.add('invalid');
        inputValue.classList.remove('valid');  
    }    

 }

inputValue.addEventListener('blur', inputValueCheck)

// const inputValue = document.querySelector('#validation-input');

// const valueSet = Number(inputValue.dataset.length);



// const onInputCheck = () => {
//     if (inputValue.value.length === valueSet) {
//         inputValue.classList.add('valid');
//         inputValue.classList.remove('invalid');
//     } else {
//         inputValue.classList.add('invalid');
//         inputValue.classList.remove('valid');

//     }
// }


// inputValue.addEventListener('blur', onInputCheck)