const listsOfMenu = document.querySelectorAll('.item');
console.log(`Number of categories: ${listsOfMenu.length}`);


// const category = document.querySelectorAll('.item')
// console.log(category);

const title = listsOfMenu.forEach((value) => {
    console.log(`Category: ${value.firstElementChild.textContent}`);
    console.log(`Elements: ${value.lastElementChild.children.length}`);
});