// Завдання 8
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const formUser = document.querySelector('.login-form');

const onSubmit = (event) => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    if(email.value === "" || password.value === ""){
    return alert('всі поля повинні бути заповнені')
     };
  
console.log({
        email: email.value,
        password: password.value});
event.target.reset();
}
formUser.addEventListener('submit', onSubmit)


// const onSubmit = (event) => {
//   event.preventDefault();
//   if (
//     itemsNumber.value === "" ||
//     name.value.length === 0 ||
//     !customerName.value
//   ) {
//     console.log(itemsNumber.value === "");
//     console.log(name.value.length === 0);
//     console.log(!customerName.value);
//     return;
//   }

//   const { itemsNumber, name, customerName } = event.target.elements;
//   console.log({
//     itemsNumber: itemsNumber.value,
//     name: name.value,
//     customerName: customerName.value,
//   });

//   event.target.reset();
// };