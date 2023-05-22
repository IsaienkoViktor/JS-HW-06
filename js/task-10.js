// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

//   1. Додати ресет для очищення 
//   2. Отримати кнопки 
//   3. Отримати початковий дів 
//   4. Отримати кнопки 
  


// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const ref = {
  createBox: document.querySelector('[data-create]'),
  destroyBox: document.querySelector('[data-destroy]'),
  input: document.querySelector('[type="number"]'),
  boxesIsCreate: document.querySelector('#boxes'),
  boxControls: document.querySelector('#controls')
}

 function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 }

const createBoxes = () => {
  const inputValue = ref.input.value;
  let boxCreated = [];
  let firstBox = 30;
  for (let i = 1; i <= inputValue; i += 1) {
    if (inputValue > 100) {
      alert('Maximum input value is 100')
      break;
    }
    else{const createCustomBox = document.createElement('div');
  createCustomBox.classList.add('item');
  createCustomBox.style.width = firstBox + 'px';
  createCustomBox.style.height = firstBox + 'px';
  createCustomBox.style.backgroundColor = getRandomHexColor();
    firstBox += 10;
      boxCreated.push(createCustomBox);
    }
   }
  ref.boxesIsCreate.append(...boxCreated);
  console.log(boxCreated);
  
}

const destroyBoxes = () => {

  ref.boxesIsCreate.innerHTML = ('');

}

ref.createBox.addEventListener('click', createBoxes)
ref.destroyBox.addEventListener('click', destroyBoxes)


