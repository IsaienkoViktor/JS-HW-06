const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



// const makeGallery = ({ url, alt}) => {
// const galleryItem = document.createElement('li');
// const galleryImg = document.createElement('img');
// galleryItem.classList.add('item')
// galleryItem.append(galleryImg)

// galleryImg.src = url;
// galleryImg.alt = alt; 
// galleryImg.width = 1260;

    

// // console.log(galleryItem);
// // console.log(galleryImg);


//     return galleryItem
// };

// // console.log(makeGallery(...images));

// const cardsArr = images.map((img) => { return makeGallery(img); }); 
// console.log(cardsArr);


// gallery.append(...cardsArr)

const gallery = document.querySelector(".gallery");

const galleryMarkup = images.map(({ url, alt }) =>`<li><img src="${url}" alt="${alt}" width = "1260"></li>`).join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);