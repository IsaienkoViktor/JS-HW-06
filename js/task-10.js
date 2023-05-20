function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}












// refs.form.addEventListener("submit", onSubmit);
// let DRAW_PIXEL = 1;
// let DRAW_COLOR = 'black';

// const ourBody = document.body;
// const inputDrawSize = document.querySelector('[name="drawPx"]')
// const changeColorRef = document.querySelector(".color");

// changeColorRef.addEventListener('change', onChangeColor)

// function onChangeColor() {
//   // console.log(changeColorRef.value);
//   DRAW_COLOR = changeColorRef.value;
// }

// inputDrawSize.addEventListener('change', onChangeDrawSize)

// function onChangeDrawSize() {
//   DRAW_PIXEL = inputDrawSize.value
// }

  
// ourBody.style.height = "100vh";
// ourBody.addEventListener('mousedown', onClickDraw)  //1 
// ourBody.addEventListener('mouseup', onCancelDraw) //4

// function onClickDraw() {
//   ourBody.addEventListener('mousemove', drawSquare) // 2
// }

// function onCancelDraw() {
//   ourBody.removeEventListener('mousemove', drawSquare) //5
// }

// function drawSquare(event) { // 3 
//   // console.log(event, event.pageX, event.pageY);

//   const box = document.createElement('div');
//   box.style.position = 'absolute';
//   box.style.left = event.pageX + 'px';
//   box.style.top = event.pageY + 'px';
//   box.style.width = DRAW_PIXEL + 'px';
//   box.style.height = DRAW_PIXEL + 'px';
//   box.style.backgroundColor = DRAW_COLOR;


//   ourBody.append(box);
// }