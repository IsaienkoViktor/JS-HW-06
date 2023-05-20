const listsOfmenu = document.querySelectorAll('.item');
console.log(`Number of categories: ${listsOfmenu.length}`);


// const category = document.querySelectorAll('.item')
// console.log(category);

const title = listsOfmenu.forEach((value) => {
    console.log(`Category: ${value.firstElementChild.textContent}`);
    console.log(`Elements: ${value.lastElementChild.children.length}`);
});