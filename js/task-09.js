// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }



const bodyChangeColor = document.body;
const spanChangeColor = document.querySelector('.color');
const buttonPress = document.querySelector('.change-color')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () =>{
  bodyChangeColor.style.backgroundColor = getRandomHexColor()
  console.log(bodyChangeColor.style.backgroundColor);
  spanChangeColor.textContent = `${bodyChangeColor.style.backgroundColor}`
 console.log(spanChangeColor.textContent);
  
}

buttonPress.addEventListener('click', changeColor)